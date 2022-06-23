import React, { useState } from 'react';
import ApiClient from '../../ApiClient';
import { unregisteredGuestData } from '../../variables';
import { User } from '../../Shared';
import styles from './styles.module.css';
import InputSet from '../../components/InputSet';

interface InputsStatesSignature extends User {
  [key: string]: string;
}

const emptyFormInputs: InputsStatesSignature = {
  username: '',
  email: '',
  password: '',
};

const SignUpPage: React.FC = () => {
  const [inputsStates, setInputsStates] = useState<InputsStatesSignature>({
    ...emptyFormInputs,
  });

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await ApiClient.registerUser(inputsStates);
    setInputsStates({ ...emptyFormInputs });
  };
  return (
    <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
      {unregisteredGuestData.signUpInputs
        && unregisteredGuestData.signUpInputs.map((item) => (
          <InputSet
            key={item.labelId}
            item={item}
            value={inputsStates[item.name]}
            setValue={setInputsStates}
          />
        ))}
      <button className={styles['submit-btn']} type="submit">
        Sign up
      </button>
    </form>
  );
};

export default SignUpPage;
