import { createSlice } from '@reduxjs/toolkit';
import { emptySignUpFormInputs } from '../../src/variables';
import { UserInfo } from '../../src/Shared';

export interface SignUpState {
  form: UserInfo;
  formErrors: string[];
}

const initialState: SignUpState = {
  form: emptySignUpFormInputs,
  formErrors: [],
};

const SignUpSlice = createSlice({
  name: 'SignUpSlice',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.form.username = action.payload;
    },
    setPassword: (state, action) => {
      state.form.password = action.payload;
    },
    setEmail: (state, action) => {
      state.form.email = action.payload;
    },
    resetForm: (state) => {
      state.form = emptySignUpFormInputs;
    },
    setFormError: (state, action) => {
      state.formErrors = Array.from(
        new Set([...state.formErrors, action.payload]),
      );
    },
    removeFormError: (state, action) => {
      state.formErrors = state.formErrors.filter(
        (item) => item !== action.payload,
      );
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  resetForm,
  setFormError,
  removeFormError,
} = SignUpSlice.actions;
export default SignUpSlice.reducer;
