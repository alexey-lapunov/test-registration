import React from 'react';
import InputMask from 'react-input-mask';

import styles from './Input.module.scss';

const Input = props => {
  const { mask, value, onChange, labelText, onKeyUp } = props;
  return (
    <div className={styles.box}>
      <label>
        <span className={styles.label}>{labelText}</span>
        <InputMask maskChar="" mask={mask} value={value} onChange={onChange}>
          {() => (
            <input type="text" onKeyUp={onKeyUp} className={styles.input} />
          )}
        </InputMask>
      </label>
    </div>
  );
};

export { Input };
