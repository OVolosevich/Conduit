export interface Input {
  name: string;
  type: string;
  label: string;
  labelId: string;
  regExp?: { [Symbol.match](string: string): RegExpMatchArray | null };
  isValidated: boolean;
}

interface userInterfaceData {
  navbarLinks: string[];
  filterBlockTabs: string[];
  signUpInputs?: Input[];
}

const inputsValidation = {
  name: /^[A-Za-z А-Яа-я]*$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
export const registeredUserData: userInterfaceData = {
  navbarLinks: ['home', 'new article', 'settings', 'username'],
  filterBlockTabs: ['your feed', 'global feed'],
};

export const unregisteredGuestData: userInterfaceData = {
  navbarLinks: ['home', 'sign in', 'sign up'],
  filterBlockTabs: ['global feed'],
  signUpInputs: [
    {
      type: 'text',
      name: 'username',
      label: 'Name',
      labelId: 'signUpName',
      isValidated: true,
      regExp: inputsValidation.name,
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      labelId: 'signUpEmail',
      isValidated: true,
      regExp: inputsValidation.email,
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      labelId: 'signUpPassword',
      isValidated: false,
    },
  ],
};

export const tagsList: string[] = [
  'welcome',
  'implementations',
  'codebaseShow',
  'introduction',
];
