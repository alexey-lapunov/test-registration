import React, { useReducer } from 'react';
import { reducer, initialState, setCardNumber } from './hooks';

import styles from './CreditCardForm.module.scss';

const CreditCardForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.cell}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
      </div>
    </div>
  );
};

export { CreditCardForm };
