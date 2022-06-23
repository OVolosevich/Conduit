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
}

const InputSet: React.FC<InputSetProps> = ({ item, value, setValue }) => {
  const {
    type, name, label, labelId,
  } = item;
  return (
    <div className={styles['input-set']} key={labelId}>
      <label htmlFor={labelId}>{label}</label>
      <input
        id={labelId}
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue((prev) => ({ ...prev, [name]: e.target.value }))}
      />
    </div>
  );
};

export default InputSet;
