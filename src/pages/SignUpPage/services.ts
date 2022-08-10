import { UserInfo, UserInputAction } from '../../Shared';
import { emptySignUpFormInputs } from '../../variables';

const enum UserInputActionTypes {
  cleanForm = 'clean',
  changeUsername = 'username',
  changePassword = 'password',
  changeEmail = 'email',
}

export default function reducer(state: UserInfo, action: UserInputAction): UserInfo {
  switch (action.type) {
    case UserInputActionTypes.cleanForm:
      return { ...emptySignUpFormInputs };
    case UserInputActionTypes.changeUsername:
      return action.payload
        ? { ...state, username: action.payload }
        : { ...state, username: '' };
    case UserInputActionTypes.changeEmail:
      return action.payload
        ? { ...state, email: action.payload }
        : { ...state, email: '' };
    case UserInputActionTypes.changePassword:
      return action.payload
        ? { ...state, password: action.payload }
        : { ...state, password: '' };
    default:
      return state;
  }
}
