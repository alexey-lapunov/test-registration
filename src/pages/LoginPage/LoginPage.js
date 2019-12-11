import React from 'react';

import MySelect from 'components/MySelect';

import styles from './LoginPage.module.scss';
class LoginPage extends React.PureComponent {
  render() {
    return (
      <div className={styles.page}>
        <MySelect />
      </div>
    );
  }
}

export default LoginPage;
