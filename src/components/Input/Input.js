import React from 'react';
import InputMask from 'react-input-mask';

import styles from './Input.module.scss';

const Input = props => {
  const { mask, value, onChange, labelText, onKeyUp, onFocus, onBlur } = props;
  return (
    <div className={styles.box}>
      <label>
        <span className={styles.label}>{labelText}</span>
        <InputMask
          maskChar=""
          mask={mask}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {() => (
            <input type="text" onKeyUp={onKeyUp} className={styles.input} />
          )}
        </InputMask>
      </label>
    </div>
  );
};

export { Input };
