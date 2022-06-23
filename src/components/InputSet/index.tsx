import React from 'react';
import { Input } from '../../variables';
import styles from './styles.module.css';

interface InputsStatesSignature {
  userName: string;
  email: string;
  password: string;
  [key: string]: string;
}

interface InputSetProps {
  item: Input;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<InputsStatesSignature>>;
}

const InputSet: React.FC<InputSetProps> = (props) => {
  const { item } = props;
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
        value={props.value}
        onChange={(e) => props.setValue((prev) => ({ ...prev, [name]: e.target.value }))}
      />
    </div>
  );
};

export default InputSet;
