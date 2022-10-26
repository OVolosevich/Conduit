import { UserInfo } from '../../src/Shared';

export const fillForm = (formdata: UserInfo): void => {
  cy.get('input[name="username"]').type(formdata.name);
  cy.get('input[name="email"]').type(formdata.email);
  cy.get('input[name="password"]').type(formdata.password);
};

export const submitForm = (option: string): void => {
  const submitBtn = cy.contains('Sign Up');
  switch (option) {
    case 'success':
      cy.intercept('POST', 'https://api.realworld.io/api/users', {
        statusCode: 200,
        message: 'success',
      }).as('successfulSignUp');
      submitBtn.click();
      cy.wait('@successfulSignUp');
      break;
    case 'failure':
      cy.intercept('POST', 'https://api.realworld.io/api/users', {
        statusCode: 422,
        errors: 'data is not unique',
      }).as('dataIsNotUniqueError');
      submitBtn.click();
      cy.wait('@dataIsNotUniqueError');
      break;
    default:
      break;
  }
};

export const assertModalOpen = (modalTestId: string): void => {
  cy.get(`[data-test-id="${modalTestId}"]`).should('be.visible');
};
