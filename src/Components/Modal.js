import React from 'react';
import styles from './Modal.module.css';
import { UseinputDataContext } from '../Store/InputDataContext';
import reactDom from 'react-dom';

const ModalBG = ({ changeErrorHandler }) => {
  return <div className={styles.modalbg} onClick={changeErrorHandler}></div>;
};

const ModalCard = ({ errorMessage, changeErrorHandler }) => {
  return (
    <div className={styles.errorCard}>
      <button className={styles.modalClose} onClick={changeErrorHandler}>
        &times;
      </button>
      <h1 className={styles.errorHeader}>Error!</h1>
      <hr className={styles.border} />
      <p className={styles.errorDetail}>{errorMessage}</p>
    </div>
  );
};

const Modal = () => {
  const ctx = UseinputDataContext();

  return (
    <>
      {reactDom.createPortal(
        <div className={styles.modalContainer}>
          <ModalBG changeErrorHandler={ctx.changeErrorHandler} />
          <ModalCard
            errorMessage={ctx.errorMessage}
            changeErrorHandler={ctx.changeErrorHandler}
          />
        </div>,
        document.getElementById('errorModal')
      )}
    </>
  );
};

export default Modal;
