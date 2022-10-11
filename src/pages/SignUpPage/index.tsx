import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import styles from "./styles.module.css";
import { unregisteredGuestData } from "../../variables";
import { AppDispatch, RootState } from "../../../store/state";
import { getOnChangeHandler, submitHandler } from "./services";
import { UserInfo } from "../../Shared";
import {
  setFormError,
  SignUpState,
  removeFormError,
} from "../../../store/slices/SignUpSlice";

const SignUpPage: React.FC = () => {
  const { formInputs } = unregisteredGuestData;
  const dispatch = useDispatch<AppDispatch>();
  const signUpForm = useSelector<RootState, UserInfo>(
    (state) => state.signUpPage.form
  );
  const { formErrors } = useSelector<RootState, SignUpState>(
    (state) => state.signUpPage
  );
  const onChange = (inputName: string, value: string) => {
    const action = getOnChangeHandler(inputName);
    dispatch(action(value));
  };

  const setError = (errorMessage: string): void => {
    dispatch(setFormError(errorMessage));
  };
  const removeError = (inputName: string): void => {
    dispatch(removeFormError(inputName));
  };
  const errors = formErrors.map((item) => <p key={item}>{item}</p>);
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {formInputs.map(({ type, name, label, labelId, regExp }) => (
        <Input
          key={labelId}
          setValue={onChange}
          value={signUpForm[name]}
          type={type}
          name={name}
          label={label}
          labelId={labelId}
          regExp={regExp}
          setError={setError}
          removeError={removeError}
        />
      ))}
      <div>{errors}</div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpPage;
