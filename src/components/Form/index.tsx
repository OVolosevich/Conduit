import React from 'react';
import styles from './styles.module.css';
import { UserInfo, Input as InputInterface } from '../../Shared';
import Input from '../Input/index';
import Button from '../Button';

interface FormProps {
  onChange: (inputName: string, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>, user: UserInfo) => void;
  setError: (errorMessage: string) => void;
  removeError: (inputName: string) => void;
  userInfo: UserInfo;
  inputs: InputInterface[];
  errors: JSX.Element[],
}

const Form: React.FC<FormProps> = (props) => {
  const {
    onChange, onSubmit, setError, removeError, userInfo, inputs, errors,
  } = props;
  return (
    <form
      onSubmit={(event) => onSubmit(event, userInfo)}
      className={styles.form}
    >
      {inputs.map((item) => (
        <Input
          key={item.labelId}
          setValue={onChange}
          value={userInfo[item.name]}
          item={item}
          setError={setError}
          removeError={removeError}
        />
      ))}
      <div className={styles.form__errors}>{errors}</div>
      <Button isSubmit text="Sign Up" className={styles['form__submit-btn']} />
    </form>
  );
};

export default Form;
