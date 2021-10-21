import React from 'react';
import Card from './Card';
import Form from './Form';
import styles from './Body.module.css';

const Body = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(/images/pattern-bg.png)` }}
    >
      <h1 className={styles.heading}>IP Address Tracker</h1>
      <Form />
      <Card />
    </div>
  );
};

export default Body;
