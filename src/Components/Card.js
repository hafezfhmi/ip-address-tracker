import React from 'react';
import styles from './card.module.css';
import CardDetails from './CardDetails';

const Card = () => {
  return (
    <div className={styles.card}>
      <CardDetails header="IP Address" detail="192.168.1.1" />
      <CardDetails header="Location" detail="192.168.1.1" />
      <CardDetails header="Timezone" detail="192.168.1.1" />
      <CardDetails header="ISP" detail="192.168.1.1" />
    </div>
  );
};

export default Card;
