import { UserInfo, UserInterfaceData } from "./Shared";

const inputsValidation = {
  name: /^[A-Za-z А-Яа-я]*$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const emptySignUpFormInputs: UserInfo = {
  username: "",
  email: "",
  password: "",
};

export const registeredUserData: UserInterfaceData = {
  navbarLinks: ["home", "new article", "settings", "username"],
  filterBlockTabs: ["your feed", "global feed"],
  formInputs: [],
};

export const unregisteredGuestData: UserInterfaceData = {
  navbarLinks: ["home", "sign in", "sign up"],
  filterBlockTabs: ["global feed"],
  formInputs: [
    {
      type: "text",
      name: "username",
      label: "Name",
      labelId: "signUpName",
      regExp: inputsValidation.name,
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      labelId: "signUpEmail",
      regExp: inputsValidation.email,
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      labelId: "signUpPassword",
    },
  ],
};

export const tagsList: string[] = [
  "welcome",
  "implementations",
  "codebaseShow",
  "introduction",
];
