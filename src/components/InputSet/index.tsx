import React from 'react';
import { Input } from '../../variables';
import { User } from '../../Shared';
import styles from './styles.module.css';

interface InputsStatesSignature extends User {
  [key: string]: string;
}

interface InputSetProps {
  item: Input;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<InputsStatesSignature>>;
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
  errors: string[];
}

const InputSet: React.FC<InputSetProps> = ({
  item,
  value,
  setValue,
  setErrors,
  errors,
}) => {
  const {
    type, name, label, labelId, isValidated, regExp,
  } = item;
  const validateInput = (
    expressionToMath: {
      [Symbol.match](string: string): RegExpMatchArray | null;
    },
    event: React.FocusEvent<HTMLInputElement>,
  ): boolean => (
    Boolean(event.target.value)
    && Boolean(event.target.value.match(expressionToMath))
  );

  const blurHandler = (
    expressionToMath: {
      [Symbol.match](string: string): RegExpMatchArray | null;
    },
    event: React.FocusEvent<HTMLInputElement>,
  ): void => {
    const isValueValid = validateInput(expressionToMath, event);
    if (isValueValid === false) {
      const warning = `${event.target.name} is invalid`;
      if (!errors.includes(warning)) {
        setErrors((prev) => [...prev, warning]);
      }
    }
  };

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    setErrors((prev) => [...prev].filter((warning) => !warning.includes(event.target.name)));
  };
  return (
    <div className={styles['input-set']} key={labelId}>
      <label htmlFor={labelId}>{label}</label>
      <input
        id={labelId}
        type={type}
        name={name}
        value={value}
        onChange={(event) => setValue((prev) => ({ ...prev, [name]: event.target.value }))}
        onFocus={(event) => isValidated && focusHandler(event)}
        onBlur={(event) => isValidated && regExp && blurHandler(regExp, event)}
      />
    </div>
  );
};

export default InputSet;
