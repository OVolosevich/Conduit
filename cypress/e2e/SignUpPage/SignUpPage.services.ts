import { UserInfo } from 'src/Shared';

export const fillForm = (formdata: UserInfo): void => {
  cy.get('input[name="username"]').type(formdata.name);
  cy.get('input[name="email"]').type(formdata.email);
  cy.get('input[name="password"]').type(formdata.password);
};

export const submitFilledForm = (option: string): void => {
  switch (option) {
    case 'success':
      cy.intercept('POST', 'https://api.realworld.io/api/users', {
        statusCode: 200,
        message: 'success',
      }).as('successfulSignUp');
      cy.contains('Sign Up').click();
      cy.wait('@successfulSignUp');
      break;
    case 'failure':
      cy.intercept('POST', 'https://api.realworld.io/api/users', {
        statusCode: 422,
        errors: 'data is not unique',
      }).as('dataIsNotUniqueError');
      cy.contains('Sign Up').click();
      cy.wait('@dataIsNotUniqueError');
      break;
    default:
      break;
  }
};

export const assertModalOpen = (modalTestId: string): void => {
  cy.get(`[data-test-id="${modalTestId}"]`).should('be.visible');
};

export const checkFormEmpty = (): void => {
  cy.get('input[name="username"]').should('have.value', '');
  cy.get('input[name="email"]').should('have.value', '');
  cy.get('input[name="password"]').should('have.value', '');
};

export const assertFormError = (error: string): void => {
  cy.contains(error).should('be.visible');
};
