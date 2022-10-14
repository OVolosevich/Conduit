import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  setName,
  setEmail,
  setPassword,
} from '../../../store/slices/SignUpSlice';
import ApiClient from '../../ApiClient';
import { UserInfo } from '../../Shared';

interface HandlersList {
  [value: string]: ActionCreatorWithPayload<string, string>;
}

const signUpInputHandlers: HandlersList = {
  username: setName,
  email: setEmail,
  password: setPassword,
};
export const getOnChangeHandler = (
  labelId: string,
): ActionCreatorWithPayload<string, string> => signUpInputHandlers[labelId];

export const isAnyInputEmpty = (user: UserInfo) => {
  const formValues = Object.values(user);
  return formValues.some((item) => item === '');
};
export const registerUser = async (user: UserInfo) => {
  const response = await ApiClient.registerUser(user);
  return response;
};
