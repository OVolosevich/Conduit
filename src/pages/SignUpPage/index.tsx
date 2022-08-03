import React, { useState } from 'react';
import { AxiosError } from 'axios';
import ApiClient from '../../ApiClient';
import { unregisteredGuestData } from '../../variables';
import { UserInfo } from '../../Shared';
import styles from './styles.module.css';
import InputSet from '../../components/InputSet';

const emptyFormInputs: UserInfo = {
  username: '',
  email: '',
  password: '',
};

const SignUpPage: React.FC = () => {
  const [inputsStates, setInputsStates] = useState<UserInfo>({
    ...emptyFormInputs,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await ApiClient.registerUser(inputsStates);
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response && e.response.data && e.response.data.errors) {
          const errorsArray = Object.entries(e.response.data.errors);
          errorsArray.forEach((item) => {
            const error = `${item[0]} ${item[1]}`;
            if (!errors.includes(error)) {
              setErrors((prev) => [...prev, error]);
            }
          });
        } else if (e instanceof Error) {
          const error = e.message;
          if (!errors.includes(error)) {
            setErrors((prev) => [...prev, error]);
          }
        }
      }
    }

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
            setErrors={setErrors}
            errors={errors}
          />
        ))}
      <div>
        {errors.length !== 0
          && errors.map((item) => (
            <p key={item}>
              Error:
              {item}
            </p>
          ))}
      </div>
      <button className={styles['submit-btn']} type="submit">
        Sign up
      </button>
    </form>
  );
};

export default SignUpPage;
