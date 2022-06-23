export interface Input {
  name: string;
  type: string;
  label: string;
  labelId: string;
}

interface Idata {
  navbarLinks: string[];
  filterBlockTabs: string[];
  signUpInputs?: Input[];
}
export const registeredUserData: Idata = {
  navbarLinks: ['home', 'new article', 'settings', 'username'],
  filterBlockTabs: ['your feed', 'global feed'],
};

export const unregisteredGuestData: Idata = {
  navbarLinks: ['home', 'sign in', 'sign up'],
  filterBlockTabs: ['global feed'],
  signUpInputs: [
    {
      type: 'text',
      name: 'userName',
      label: 'Name',
      labelId: 'signUpName',
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      labelId: 'signUpEmail',
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      labelId: 'signUpPassword',
    },
  ],
};

export const tagsList: string[] = [
  'welcome',
  'implementations',
  'codebaseShow',
  'introduction',
];
