import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unregisteredGuestData } from '../../variables';
import { AppDispatch, RootState } from '../../../store/state';
import { getOnChangeHandler, registerUser, isAnyInputEmpty } from './services';
import { UserInfo, RegisterUserResponse } from '../../Shared';
import {
  setFormError,
  SignUpState,
  removeFormError,
  resetForm,
} from '../../../store/slices/SignUpSlice';
import Modal from '../../components/Modal';
import PageTitle from '../../components/PageTitle';
import Form from '../../components/Form';

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector<RootState, UserInfo>(
    (state) => state.signUpPage.form,
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
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

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    user: UserInfo,
  ) => {
    event.preventDefault();
    if (isAnyInputEmpty(user) && !hasErrors) {
      setError(unregisteredGuestData.emptyFormError);
    } else if (!hasErrors) {
      const result: RegisterUserResponse = await registerUser(user);
      setShowModal(true);
      if (result.success) {
        setIsSuccess(true);
        dispatch(resetForm());
      }
    }
  };
  return (
    <>
      <PageTitle text="Sign up" />
      <Form
        removeError={removeError}
        setError={setError}
        onChange={onChange}
        onSubmit={onSubmit}
        userInfo={userInfo}
        inputs={unregisteredGuestData.formInputs}
        errors={errors}
      />
      {showModal && (
      <Modal
        onClose={() => setShowModal(false)}
        modal="signUp"
        option={isSuccess ? 'success' : 'failure'}
      />
      )}
    </>
  );
};

export default SignUpPage;
