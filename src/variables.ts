import { UserInfo, UserInterfaceData, ModalContent } from './Shared';

const inputsValidation = {
  name: /^[A-Za-z А-Яа-я]*$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const emptySignUpFormInputs: UserInfo = {
  username: '',
  email: '',
  password: '',
};

export const registeredUserData: UserInterfaceData = {
  navbarLinks: ['home', 'new article', 'settings', 'username'],
  filterBlockTabs: ['your feed', 'global feed'],
  formInputs: [],
  emptyFormError: 'Fill in form to sign in',
};

export const unregisteredGuestData: UserInterfaceData = {
  navbarLinks: ['home', 'sign in', 'sign up'],
  filterBlockTabs: ['global feed'],
  formInputs: [
    {
      type: 'text',
      name: 'username',
      label: 'Name',
      labelId: 'signUpName',
      regExp: inputsValidation.name,
      emtyErrorMessage: 'name must not be empty',
      validationErrorMessage: 'check the validity of name',
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      labelId: 'signUpEmail',
      regExp: inputsValidation.email,
      emtyErrorMessage: 'email must not be empty',
      validationErrorMessage: 'check the validity of email',
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      labelId: 'signUpPassword',
      emtyErrorMessage: 'password must not be empty',
    },
  ],
  emptyFormError: 'Fill in form to sign up',
};

export const tagsList: string[] = ['voluptate', 'error', 'sapiente', 'sed'];

export const modalTextContent: ModalContent = {
  signUp: {
    success: {
      title: 'Welcome!',
      message: "You've registered successfully.",
      buttonText: 'OK',
      testId: 'successSignUp',
    },
    failure: {
      title: 'Oops!',
      message: 'Something went wrong! Please try again later',
      buttonText: 'OK',
      testId: 'failureSignUp',
    },
  },
  signIn: {
    success: {
      title: 'Welcome!',
      message: "You've registered successfully.",
      buttonText: 'OK',
      testId: 'successSignIn',
    },
    failure: {
      title: 'Oops!',
      message: 'Something went wrong! Please try again later',
      buttonText: 'OK',
      testId: 'failureSignIn',
    },
  },
};

export const getDefaultServerErrorText = (errorcode: number): string => `Something went wrong! Response status is ${errorcode}.`;
