import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';

const Select = ({ options, defaultValue }) => {
  return (
    <select className={styles.select}>
      <option defaultValue={defaultValue}>{defaultValue}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
Select.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.string
};

Select.defaultProps = {
  options: [],
  defaultValue: ''
};

export { Select };
