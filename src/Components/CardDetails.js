import React from 'react';
import styles from './cardDetails.module.css';

const CardDetails = ({ header, detail }) => {
  return (
    <>
      <h2 className={styles.card_Header}>{header}</h2>
      <p className={styles.card_Detail}>{detail}</p>
    </>
  );
};

export default CardDetails;
