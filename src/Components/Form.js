import React from 'react';
import styles from './form.module.css';
import { UseinputDataContext } from '../Store/InputDataContext';
import Modal from './Modal';

const Form = () => {
  const ctx = UseinputDataContext();

  return (
    <>
      {ctx.error && <Modal />}
      <form onSubmit={ctx.submitHandler}>
        <div className={styles.buttonContainer}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className={styles.input}
            onChange={ctx.inputHandler}
          />
          <button className={styles.button}>
            <img src="/images/icon-arrow.svg" alt="Arrow icon" />
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
