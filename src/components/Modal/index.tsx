import React from 'react';
import styles from './styles.module.css';
import getModalContent from './services';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

interface ModalProps {
  onClose: () => void;
  modal: 'signIn' | 'signUp';
  option: 'success' | 'failure';
}

const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, modal, option } = props;
  const { message, title, buttonText } = getModalContent(modal, option);
  const clickHandler = (
    event:
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    if (
      event.target instanceof HTMLElement
      && event.target.classList[0] === event.currentTarget.classList[0]
    ) {
      onClose();
    }
  };
  return (
    <div
      tabIndex={0}
      role="dialog"
      className={styles.modal}
      onClick={(event) => clickHandler(event)}
    >
      <div className={styles.modal__container}>
        <p>{title}</p>
        <p>{message}</p>
        <button
          onClick={(event) => clickHandler(event)}
          className={styles['modal__confirm-btn']}
          type="button"
        >
          {buttonText}
        </button>
        <button
          onClick={(event) => clickHandler(event)}
          className={styles['modal__close-btn']}
          type="button"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
