import React, { useReducer } from 'react';
import classnames from 'classnames';
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition
} from 'react-transition-group';

import {
  reducer,
  initialState,
  setCardNumber,
  setCardRotate,
  setCardHolder,
  setCardDateMonth,
  setCardDateYear,
  setCardCvv,
  setCardType
} from './hooks';

import { regexp } from 'utils/regexp';

import { Input } from 'components/Input';
import { Select } from 'components/Select';

import mrImg from 'static/img/mr.jpg';
import visaIcon from 'static/icons/visa.png';
import troyIcon from 'static/icons/troy.png';
import amexIcon from 'static/icons/amex.png';
import discoverIcon from 'static/icons/discover.png';
import mastercardIcon from 'static/icons/mastercard.png';

import styles from './CreditCardForm.module.scss';
import chartTranstion from './transitions/chart.module.scss';
import dateTranstion from './transitions/date.module.scss';

const cardTypeIcons = {
  visa: visaIcon,
  amex: amexIcon,
  troy: troyIcon,
  discover: discoverIcon,
  mastercard: mastercardIcon
};

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

  const inputCardNumberOnChange = e => {
    const target = e.target;

    getCardType(target.value);
    dispatch(setCardNumber(target.value));
  };

  const inputCardHolderOnChange = e => {
    const target = e.target;

    dispatch(setCardHolder(target.value));
  };

  const selectMonthOnChange = e => {
    const target = e.target;

    dispatch(setCardDateMonth(target.value));
  };

  const selectYearOnChange = e => {
    const target = e.target;

    dispatch(setCardDateYear(target.value));
  };

  const inputCardCvv = e => {
    const target = e.target;

    dispatch(setCardCvv(target.value));
  };

  const getCardType = number => {
    if (number.match(regexp.regExpVisa)) return dispatch(setCardType('visa'));
    if (number.match(regexp.regExpAmex)) return dispatch(setCardType('amex'));
    if (number.match(regexp.regExpTroy)) return dispatch(setCardType('troy'));
    if (number.match(regexp.regExpDiscover))
      return dispatch(setCardType('discover'));
    if (number.match(regexp.regExpMasterCard))
      return dispatch(setCardType('mastercard'));
    return dispatch(setCardType('visa'));
  };

  return (
    <div className={styles.container}>
      <div
        className={classnames(styles.card, {
          [styles.rotate]: state.cardRotate
        })}
      >
        <div className={styles.cardContent}>
          <div
            className={styles.cardFront}
            style={{ backgroundImage: `url(${mrImg})` }}
          >
            <div className={styles.cardType}>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  appear
                  timeout={500}
                  classNames={dateTranstion}
                  key={state.cardType}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, false);
                  }}
                >
                  <img
                    alt=""
                    className={styles.cardTypeIcon}
                    src={cardTypeIcons[state.cardType]}
                  />
                </CSSTransition>
              </SwitchTransition>
            </div>
            <div className={styles.cardNumber}>
              {Array.from(Array(16)).map((item, i) => {
                const cardNumber = state.cardNumber.replace(/\s/g, '');
                const translateY = (+cardNumber[i] + 1) * 100 || 0;
                return (
                  <div
                    key={i}
                    className={styles.cardNumberFigure}
                    style={{
                      transform: `translateY(-${translateY}%)`
                    }}
                  >
                    {Array.from(Array(11)).map((item, i) => (
                      <i key={i}>{i - 1 === -1 ? 'X' : i - 1}</i>
                    ))}
                  </div>
                );
              })}
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardHolder}>
                <span className={styles.cardHolderLabel}>Card Holder</span>
                <TransitionGroup className={styles.cardHolderValue}>
                  {Array.from(state.cardHolder).map((chart, i) => (
                    <CSSTransition
                      key={i}
                      timeout={500}
                      classNames={chartTranstion}
                    >
                      <span className={styles.cardHolderChart}>{chart}</span>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div>
              <div className={styles.cardDate}>
                <span className={styles.cardDateLabel}>Expires</span>
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    appear
                    timeout={500}
                    classNames={dateTranstion}
                    key={state.expirationDate.month}
                    addEndListener={(node, done) => {
                      node.addEventListener('transitionend', done, false);
                    }}
                  >
                    <span className={styles.cardDateMonth}>
                      {state.expirationDate.month}
                    </span>
                  </CSSTransition>
                </SwitchTransition>
                {'/'}
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    appear
                    timeout={500}
                    classNames={dateTranstion}
                    key={state.expirationDate.year}
                    addEndListener={(node, done) => {
                      node.addEventListener('transitionend', done, false);
                    }}
                  >
                    <span className={styles.cardDateYear}>
                      {state.expirationDate.year.slice(-2)}
                    </span>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
          </div>
          <div
            className={styles.cardBack}
            style={{
              backgroundImage: `url(https://images7.alphacoders.com/801/801755.jpg)`
            }}
          >
            <div className={styles.cardBand}></div>
            <div className={styles.cardCvv}>
              <span className={styles.cardCvvTitle}>CVV</span>
              <div className={styles.cardCvvBand}>{state.cardCvv}</div>
              <div className={styles.cardCvvType}>
                <img
                  alt=""
                  className={styles.cardCvvTypeIcon}
                  src={cardTypeIcons[state.cardType]}
                />
              </div>
            </div>
          </div>
        </div>
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
            onFocus={() => dispatch(setCardRotate(true))}
            onBlur={() => dispatch(setCardRotate(false))}
          />
        </div>
      </div>
    </div>
  );
};

export { CreditCardForm };
