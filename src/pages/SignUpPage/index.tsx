import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import styles from './styles.module.css';
import { unregisteredGuestData } from '../../variables';
import { AppDispatch, RootState } from '../../../store/state';
import { getOnChangeHandler, submitHandler } from './services';
import { UserInfo } from '../../Shared';

const SignUpPage: React.FC = () => {
  const { formInputs } = unregisteredGuestData;
  const dispatch = useDispatch<AppDispatch>();
  const signUpForm = useSelector<RootState, UserInfo>((state) => state.signUpPage.form);
  const onChange = (inputName: string, value: string) => {
    const action = getOnChangeHandler(inputName);
    dispatch(action(value));
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {formInputs.map(({
        type, name, label, labelId,
      }) => (
        <Input
          key={labelId}
          onChange={onChange}
          value={signUpForm[name]}
          type={type}
          name={name}
          label={label}
          labelId={labelId}
        />
      ))}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpPage;
