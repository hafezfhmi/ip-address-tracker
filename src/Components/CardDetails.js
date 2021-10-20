import React from 'react';
import styles from './cardDetails.module.css';

const CardDetails = ({ header, detail }) => {
  return (
    <div className={styles.detail_container}>
      <h2 className={styles.card_Header}>{header}</h2>
      <p className={styles.card_Detail}>{detail}</p>
    </div>
  );
};

export default CardDetails;
