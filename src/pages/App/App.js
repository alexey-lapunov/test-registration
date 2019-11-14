import React from 'react';

import LoginPage from './../LoginPage/';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <h1>Test registration</h1>
      <LoginPage />
    </div>
  );
}

export default App;
