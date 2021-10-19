import React from 'react';
import styles from './form.module.css';

const Form = () => {
  return (
    <form>
      <input type="text" className={styles.input} />
      <button className={styles.button}>
        <img src="/images/icon-arrow.svg" alt="Arrow icon" />
      </button>
    </form>
  );
};
export default Form;
