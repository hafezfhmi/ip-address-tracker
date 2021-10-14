import React from 'react';
import Card from './Card';
import styles from './form.module.css';

const Form = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>IP Address Tracker</h1>
      <input type="text" className={styles.input} />
      <button className={styles.button}>&gt;</button>
      <Card>
        <h2>IP ADDRESS</h2>
        <p>192.168.1.1</p>
        <h2>LOCATION</h2>
        <p>Malaysia</p>
        <h2>TIMEZONE</h2>
        <p>UTC 8</p>
        <h2>ISP</h2>
        <p>SpaceX Starlink</p>
      </Card>
    </div>
  );
};

export default Form;
