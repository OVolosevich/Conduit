import React, { useState } from 'react';
import { unregisteredGuestData } from '../../variables';
import styles from './styles.module.css';
import InputSet from '../../components/InputSet';

interface InputsStatesSignature {
  userName: string;
  email: string;
  password: string;
  [key: string]: string;
}

const emptyFormInputs: InputsStatesSignature = {
  userName: '',
  email: '',
  password: '',
};

const SignUpPage: React.FC = () => {
  const [inputsStates, setInputsStates] = useState<InputsStatesSignature>({ ...emptyFormInputs });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(inputsStates);
    setInputsStates({ ...emptyFormInputs });
  };
  return (
    <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
      {unregisteredGuestData.signUpInputs!.map((item) => (
        <InputSet
          item={item}
          value={inputsStates[item.name]}
          setValue={setInputsStates}
        />
      ))}
      <button className={styles['submit-btn']} type="submit">Sign up</button>
    </form>
  );
};

export default SignUpPage;
