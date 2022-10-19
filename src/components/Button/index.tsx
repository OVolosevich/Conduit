import React from 'react';

interface ButtonProps {
  isSubmit?: boolean;
  text: string;
  className?: string;
  onClick?: (event?:
  | React.MouseEvent<HTMLDivElement, MouseEvent>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    isSubmit, text, onClick, className,
  } = props;
  return (
    <button
      onClick={onClick}
      className={className}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  onClick: () => undefined,
  isSubmit: false,
};

export default Button;
