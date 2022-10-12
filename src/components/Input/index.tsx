import React from 'react';
import styles from './styles.module.css';
import { Input as InputInterface } from '../../Shared';
import { unregisteredGuestData } from '../../variables';

interface InputProps {
  item: InputInterface;
  setValue: (name: string, value: string) => void;
  value: string;
  setError: (errorMessage: string) => void;
  removeError: (inputName: string) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    item, setValue, value, setError, removeError,
  } = props;
  const {
    labelId,
    label,
    type,
    name,
    regExp,
    emtyErrorMessage,
    validationErrorMessage,
  } = item;
  const onBlur = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    const isEmpty = event.target.value === '';
    const isValid = regExp !== undefined && Boolean(event.target.value.match(regExp));

    if (isEmpty) {
      setError(emtyErrorMessage);
    } else if (validationErrorMessage && !isValid) {
      setError(validationErrorMessage);
    }
  };
  const onFocus = (): void => {
    removeError(unregisteredGuestData.emptyFormError);
    removeError(emtyErrorMessage);
    if (validationErrorMessage) {
      removeError(validationErrorMessage);
    }
  };
  return (
    <fieldset className={styles.fieldset}>
      <label htmlFor={labelId}>{label}</label>
      <input
        className={styles.input}
        id={labelId}
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(name, e.target.value)}
        onBlur={(e) => onBlur(e)}
        onFocus={onFocus}
      />
    </fieldset>
  );
};

export default Input;
