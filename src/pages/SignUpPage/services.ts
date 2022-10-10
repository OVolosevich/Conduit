import { useSelector } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from '../../../store/state';
import {
  setName,
  setEmail,
  setPassword,
} from '../../../store/slices/SignUpSlice';

interface HandlersList {
  [value: string]: ActionCreatorWithPayload<string, string>;
}

const signUpInputHandlers: HandlersList = {
  username: setName,
  email: setEmail,
  password: setPassword,
};
export const getOnChangeHandler = (
  labetId: string,
): ActionCreatorWithPayload<string, string> => signUpInputHandlers[labetId];

export const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
