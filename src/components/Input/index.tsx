import React from "react";
import styles from "./styles.module.css";
import getValidationError from "./services";

interface InputProps {
  type: string;
  name: string;
  label: string;
  labelId: string;
  setValue: (name: string, value: string) => void;
  value: string;
  setError: (errorMessage: string) => void;
  removeError: (inputName: string) => void;
  regExp?:
    | { [Symbol.match](string: string): RegExpMatchArray | null }
    | undefined;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    type,
    name,
    label,
    labelId,
    setValue,
    value,
    regExp,
    setError,
    removeError,
  } = props;

  const blurHandler = (
    event: React.FocusEvent<HTMLInputElement, Element>,
    expressionToMatch:
      | { [Symbol.match](string: string): RegExpMatchArray | null }
      | undefined,
    inputName: string
  ) => {
    const validationError = getValidationError(
      event.target.value,
      expressionToMatch,
      inputName
    );
    if (validationError) {
      setError(validationError);
    } else {
      removeError(inputName);
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
        onBlur={(e) => blurHandler(e, regExp, label.toLowerCase())}
      />
    </fieldset>
  );
};
Input.defaultProps = {
  regExp: undefined,
};
export default Input;
