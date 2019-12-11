import React, { useRef } from 'react';
import Select from 'react-select';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import styles from './MySelect.module.scss';

const options = [
  { id: '1', value: 'vanilla', label: 'Vanilla' },
  { id: '2', value: 'vanilla', label: 'Vanilla' },
  { id: '3', value: 'vanilla', label: 'Vanilla' },
  { id: '4', value: 'vanilla', label: 'Vanilla' },
  { id: '5', value: 'vanilla', label: 'Vanilla' },
  { id: '6', value: 'vanilla', label: 'Vanilla' },
  { id: '7', value: 'vanilla', label: 'Vanilla' },
  { id: '8', value: 'vanilla', label: 'Vanilla' },
  { id: '9', value: 'vanilla', label: 'Vanilla' },
  { id: '10', value: 'vanilla', label: 'Vanilla' }
];
const MenuList = props => {
  const srollRef = useRef();

  return (
    <div style={{ height: '200px' }}>
      <PerfectScrollbar ref={srollRef}>{props.children}</PerfectScrollbar>
    </div>
  );
};

const CustomOption = ({
  children,
  innerRef,
  innerProps,
  isFocused,
  ...props
}) => {
  console.log(document.getElementById(props.data.id));
  return (
    <div id={props.data.id} ref={innerRef} {...innerProps}>
      {children}
    </div>
  );
};

const MySelect = () => {
  return (
    <div className={styles.select}>
      <Select
        options={options}
        menuShouldScrollIntoView={false}
        selectOption={value => console.log(value)}
        components={{ MenuList }}
      />
    </div>
  );
};

export default MySelect;
