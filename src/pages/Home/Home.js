import React, { PureComponent } from 'react';

import { CreditCardForm } from 'components/CreditCardForm';

import styles from './Home.module.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <CreditCardForm />
      </div>
    );
  }
}

export { Home };
