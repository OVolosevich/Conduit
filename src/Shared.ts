interface ArticleAuthor {
  bio: string;
  following: boolean;
  image: string;
  username: string;
}
interface ArticleItem {
  author: ArticleAuthor;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}

const enum BreakPoints {
  mobile = 320,
  tablet = 768,
  desktop = 1024,
  maximum = 1300,
}

interface RegisterUserResponse {
  message: string;
  success: boolean;
}

interface UserInfo {
  email: string;
  username: string;
  password: string;
  [key: string]: string;
}

interface UserInputAction {
  type: string;
  payload?: string | undefined;
}

interface Input {
  name: string;
  type: string;
  label: string;
  labelId: string;
  regExp?: { [Symbol.match](string: string): RegExpMatchArray | null };
  emtyErrorMessage: string;
  validationErrorMessage?: string;
}

interface UserInterfaceData {
  navbarLinks: string[];
  filterBlockTabs: string[];
  formInputs: Input[];
  emptyFormError: string;
}

type ModalText = {
  [key in "message" | "title" | "buttonText"]: string;
} & {
  message: string;
  title: string;
  buttonText: string;
};

interface ModalCases {
  success: ModalText;
  failure: ModalText;
}

type ModalContent = {
  [key in "signUp" | "signIn"]: ModalCases;
} & {
  signUp: ModalCases;
  signIn: ModalCases;
};

export {
  ArticleItem,
  BreakPoints,
  RegisterUserResponse,
  UserInfo,
  UserInputAction,
  UserInterfaceData,
  Input,
  ModalContent,
  ModalText,
};
