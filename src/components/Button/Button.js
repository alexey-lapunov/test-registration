import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.module.scss';

export const Button = ({ text, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames(styles.button, { [styles.disabled]: disabled })}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaulProps = {
  text: '',
  disabled: false,
  onClick: f => f
};
