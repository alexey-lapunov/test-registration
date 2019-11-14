import React from 'react';

import styles from './Input.module.scss';

const Input = () => {
  return (
    <div className={styles.inputBox}>
      <span className={styles.label}>Label</span>
      <input type="text" />
    </div>
  );
};

export default Input;
