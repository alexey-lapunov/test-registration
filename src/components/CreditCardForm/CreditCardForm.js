import React, { useReducer } from 'react';
import classnames from 'classnames';

import { reducer, initialState } from './state';
import * as actions from './state/actions';

import { regExp } from 'utils/regExp';

import { Card } from './Card';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { Button } from 'components/Button';

import styles from './CreditCardForm.module.scss';

const yaerOptions = Array.from(Array(11)).map((item, i) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const value = currentYear + i;

  return {
    value,
    text: value
  };
});

const monthOptions = Array.from(Array(12)).map((item, i) => {
  const value = `${i + 1}`.length === 1 ? `0${i + 1}` : `${i + 1}`;
  return {
    value,
    text: value
  };
});

const CreditCardForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCardType = number => {
    if (number.match(regExp.visa)) {
      return dispatch(actions.setCardType('visa'));
    }
    if (number.match(regExp.amex)) {
      return dispatch(actions.setCardType('amex'));
    }
    if (number.match(regExp.troy)) {
      return dispatch(actions.setCardType('troy'));
    }
    if (number.match(regExp.discover)) {
      return dispatch(actions.setCardType('discover'));
    }
    if (number.match(regExp.masterCard)) {
      return dispatch(actions.setCardType('mastercard'));
    }

    return dispatch(actions.setCardType('visa'));
  };

  const inputCardNumberOnChange = e => {
    const target = e.target;

    setCardType(target.value);
    dispatch(actions.setCardNumber(target.value.replace(/\s/g, '')));
  };

  const inputCardHolderOnChange = e => {
    const target = e.target;

    dispatch(actions.setCardHolder(target.value));
  };

  const selectMonthOnChange = e => {
    const target = e.target;

    dispatch(actions.setCardDateMonth(target.value));
  };

  const selectYearOnChange = e => {
    const target = e.target;

    dispatch(actions.setCardDateYear(target.value));
  };

  const inputCardCvv = e => {
    const target = e.target;

    dispatch(actions.setCardCvv(target.value));
  };

  const isValidForm = () => {
    const { cardNumber, cardHolder, cardCvv, expirationDate } = state;

    const isValidCardNumber = cardNumber.length === 16;
    const isValidCardHolder = cardHolder.length > 3;
    const isValidCardCvv = cardCvv.length >= 3;
    const isValidExpirationDate = !!(
      Number(expirationDate.month) && Number(expirationDate.year)
    );
    const resultValid =
      isValidCardNumber &&
      isValidCardHolder &&
      isValidCardCvv &&
      isValidExpirationDate;

    return resultValid;
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Card
          cardCvv={state.cardCvv}
          cardType={state.cardType}
          cardNumber={state.cardNumber}
          cardRotate={state.cardRotate}
          cardHolder={state.cardHolder}
          expirationDate={state.expirationDate}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <Input
            labelText="Card Number"
            value={state.cardNumber}
            mask="9999 9999 9999 9999"
            onChange={inputCardNumberOnChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <Input
            labelText="Card Holder"
            value={state.cardHolder}
            onChange={inputCardHolderOnChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.group}>
          <span className={styles.groupLabel}>Expiration Date</span>
          <div className={styles.groupItem}>
            <Select
              labelText="Month"
              options={monthOptions}
              onChange={selectMonthOnChange}
            />
          </div>
          <div className={styles.groupItem}>
            <Select
              labelText="Year"
              options={yaerOptions}
              onChange={selectYearOnChange}
            />
          </div>
        </div>
        <div className={classnames(styles.cell, styles.ccv)}>
          <Input
            mask="999"
            labelText="CVV"
            onChange={inputCardCvv}
            onFocus={() => dispatch(actions.setCardRotate(true))}
            onBlur={() => dispatch(actions.setCardRotate(false))}
          />
        </div>
      </div>
      <div className={styles.button}>
        <Button text="Submit" disabled={!state.isValidForm} />
      </div>
    </div>
  );
};

export { CreditCardForm };
