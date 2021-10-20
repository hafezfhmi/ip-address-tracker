import React from 'react';
import styles from './card.module.css';
import CardDetails from './CardDetails';
import { UseinputDataContext } from '../Store/InputDataContext';

const Card = () => {
  const ctx = UseinputDataContext();

  return (
    <div className={styles.card}>
      <CardDetails header="IP Address" detail={ctx.data.ip} />
      <CardDetails header="Location" detail={ctx.data.location} />
      <CardDetails header="Timezone" detail={ctx.data.timezone} />
      <CardDetails header="ISP" detail={ctx.data.isp} />
    </div>
  );
};

export default Card;
