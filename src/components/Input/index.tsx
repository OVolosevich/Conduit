import React from 'react';
import styles from './styles.module.css';

interface InputProps {
  type: string;
  name: string;
  label: string;
  labelId: string;
  onChange: (name: string, value: string) => void;
  value: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    type, name, label, labelId, onChange, value,
  } = props;
  return (
    <fieldset className={styles.fieldset}>
      <label htmlFor={labelId}>{label}</label>
      <input
        className={styles.input}
        id={labelId}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </fieldset>
  );
};

export default Input;
