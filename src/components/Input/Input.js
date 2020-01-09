import React from 'react';
import InputMask from 'react-input-mask';

import styles from './Input.module.scss';

const Input = props => {
  const { mask, value, onChange, labelText, onFocus, onBlur } = props;

  return (
    <div className={styles.box}>
      <label>
        <span className={styles.label}>{labelText}</span>
        <InputMask
          type="text"
          maskChar=""
          mask={mask}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export { Input };
