import { createSlice } from '@reduxjs/toolkit';
import { emptySignUpFormInputs } from '../../src/variables';
import { UserInfo } from '../../src/Shared';

interface SignUpState {
  form: UserInfo
}

const initialState: SignUpState = {
  form: emptySignUpFormInputs,
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
    resetForm: (state, action) => {
      state.form = emptySignUpFormInputs;
    },
  },
});

export const {
  setName, setEmail, setPassword, resetForm,
} = SignUpSlice.actions;
export default SignUpSlice.reducer;
