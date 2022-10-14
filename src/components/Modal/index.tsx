import React from "react";
import styles from "./styles.module.css";
import { getModalContent } from "./services";

interface ModalProps {
  onClose: () => void;
  modal: "signIn" | "signUp";
  option: "success" | "failure";
}

const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, modal, option } = props;
  const { message, title, buttonText } = getModalContent(modal, option);
  const clickHandler = (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (
      event.target instanceof HTMLElement &&
      event.target.classList[0] === event.currentTarget.classList[0]
    ) {
      onClose();
    }
  };
  return (
    <div className={styles.modal} onClick={(event) => clickHandler(event)}>
      <div className={styles.modal__container}>
        <p>{title}</p>
        <p>{message}</p>
        <button
          onClick={(event) => clickHandler(event)}
          className={styles["modal__confirm-btn"]}
        >
          {buttonText}
        </button>
        <button
          onClick={(event) => clickHandler(event)}
          className={styles["modal__close-btn"]}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
