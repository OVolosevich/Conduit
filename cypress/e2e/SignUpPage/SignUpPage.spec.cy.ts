import { UserInfo } from 'src/Shared';
import { modalTextContent, unregisteredGuestData } from 'src/variables';
import {
  fillForm,
  submitFilledForm,
  assertModalOpen,
  checkFormEmpty,
  assertFormError,
} from './SignUpPage.services';

/* eslint-disable  @typescript-eslint/no-non-null-assertion */

describe('SignUp page', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
  });
  describe('form', () => {
    it('shows empty form warning', () => {
      checkFormEmpty();
      cy.contains('Sign Up').click();
      assertFormError(unregisteredGuestData.emptyFormError);
    });
    it('shows warning on empty input blur', () => {
      const inputName = 'email';
      const inputToCheck = unregisteredGuestData.formInputs.find(
        (item) => item.name === inputName,
      );
      cy.get(`input[name="${inputName}"]`).focus().blur();
      assertFormError(inputToCheck!.emtyErrorMessage);
    });
    it('shows warning on invalid value input blur', () => {
      const inputName = 'email';
      const inputToCheck = unregisteredGuestData.formInputs.find(
        (item) => item.name === inputName,
      );
      cy.get(`input[name="${inputName}"]`).type('1111').blur();
      assertFormError(inputToCheck!.validationErrorMessage!);
    });
  });
  describe('if user data is not unique', () => {
    it('shows warning modal', () => {
      const invalidUser = {
        name: 'name',
        email: 'o@mail.ru',
        password: '1111',
      };
      const { testId } = modalTextContent.signUp.failure;

      fillForm(invalidUser as unknown as UserInfo);
      submitFilledForm('failure');
      assertModalOpen(testId);
    });
  });
  describe('if user data is unique', () => {
    it('shows success modal', () => {
      const validUser = {
        name: 'name',
        email: 'o@mail.ru',
        password: '1111',
      };
      const { testId } = modalTextContent.signUp.success;

      fillForm(validUser as unknown as UserInfo);
      submitFilledForm('success');
      assertModalOpen(testId);
    });
  });
});
