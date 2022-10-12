import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import styles from './styles.module.css';
import { unregisteredGuestData } from '../../variables';
import { AppDispatch, RootState } from '../../../store/state';
import { getOnChangeHandler, registerUser, isAnyInputEmpty } from './services';
import { UserInfo } from '../../Shared';
import {
  setFormError,
  SignUpState,
  removeFormError,
} from '../../../store/slices/SignUpSlice';

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector<RootState, UserInfo>(
    (state) => state.signUpPage.form,
  );
  const { formErrors } = useSelector<RootState, SignUpState>(
    (state) => state.signUpPage,
  );
  const setError = (errorMessage: string): void => {
    dispatch(setFormError(errorMessage));
  };
  const removeError = (inputName: string): void => {
    dispatch(removeFormError(inputName));
  };
  const onChange = (inputName: string, value: string) => {
    const action = getOnChangeHandler(inputName);
    dispatch(action(value));
  };

  const errors = formErrors.map((item) => <p key={item}>{item}</p>);
  const hasErrors = formErrors.length !== 0;

  const onSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    user: UserInfo,
  ) => {
    event.preventDefault();
    if (isAnyInputEmpty(user) && !hasErrors) {
      setError(unregisteredGuestData.emptyFormError);
    } else if (!hasErrors) {
      registerUser(user);
    }
  };
  return (
    <form
      onSubmit={(event) => onSubmit(event, userInfo)}
      className={styles.form}
    >
      {unregisteredGuestData.formInputs.map((item) => (
        <Input
          key={item.labelId}
          setValue={onChange}
          value={userInfo[item.name]}
          item={item}
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
