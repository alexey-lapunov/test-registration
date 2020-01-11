import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';

const Select = ({ options, labelText, onChange }) => {
  return (
    <select
      className={styles.select}
      onChange={onChange}
      defaultValue={labelText}
    >
      <option disabled>{labelText}</option>
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
