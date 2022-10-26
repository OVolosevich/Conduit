import React from 'react';
import styles from './styles.module.css';
import getModalContent from './services';
import Button from '../Button';

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
  const {
    message, title, buttonText, testId,
  } = getModalContent(modal, option);
  const clickHandler = (
    event?:
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event?.stopPropagation();
    if (
      event?.target instanceof HTMLElement
      && event.target.classList[0] === event.currentTarget.classList[0]
    ) {
      onClose();
    }
  };

  const titleClass = option === 'success' ? styles['modal__title-success'] : styles['modal__title-failure'];
  return (
    <div
      data-test-id={testId}
      tabIndex={0}
      role="dialog"
      className={styles.modal}
      onClick={(event) => clickHandler(event)}
    >
      <div className={styles['modal__content-container']}>
        <h2 className={titleClass}>{title}</h2>
        <p className={styles.modal__message}>{message}</p>
        <Button
          onClick={(event) => clickHandler(event)}
          className={styles['modal__confirm-btn']}
          text={buttonText}
        />
        <Button
          onClick={(event) => clickHandler(event)}
          className={styles['modal__close-btn']}
          text="x"
        />
      </div>
    </div>
  );
};

export default Modal;
