import { UserInfo } from 'src/Shared';
import { modalTextContent } from 'src/variables';
import { fillForm, submitForm, assertModalOpen } from './SignUpPage.services';

describe('SignUp page', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
  });
  describe('form', () => {});
  describe('if user data is not unique', () => {
    it('shows warning modal', () => {
      const invalidUser = {
        name: 'name',
        email: 'o@mail.ru',
        password: '1111',
      };
      const { testId } = modalTextContent.signUp.failure;

      fillForm(invalidUser as unknown as UserInfo);
      submitForm('failure');
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
      submitForm('success');
      assertModalOpen(testId);
    });
  });
});
