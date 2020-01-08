import React, { useReducer } from 'react';
import classnames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  reducer,
  initialState,
  setCardNumber,
  setCardRotate,
  setCardHolder
} from './hooks';

import { Input } from 'components/Input';
import { Select } from 'components/Select';

import mrImg from './../../static/img/mr.jpg';

import styles from './CreditCardForm.module.scss';
import chartTranstion from './transitions/chart.module.scss';

const yaerOptions = [
  {
    value: '2019',
    text: '2019'
  },
  {
    value: '2020',
    text: '2020'
  },
  {
    value: '2021',
    text: '2021'
  },
  {
    value: '2022',
    text: '2022'
  },
  {
    value: '2023',
    text: '2023'
  },
  {
    value: '2024',
    text: '2024'
  },
  {
    value: '2025',
    text: '2025'
  },
  {
    value: '2026',
    text: '2026'
  },
  {
    value: '2027',
    text: '2027'
  },
  {
    value: '2028',
    text: '2028'
  },
  {
    value: '2029',
    text: '2029'
  },
  {
    value: '2030',
    text: '2030'
  }
];

const monthOptions = [
  {
    value: '01',
    text: '01'
  },
  {
    value: '02',
    text: '02'
  },
  {
    value: '03',
    text: '03'
  },
  {
    value: '04',
    text: '04'
  },
  {
    value: '05',
    text: '05'
  },
  {
    value: '06',
    text: '06'
  },
  {
    value: '07',
    text: '07'
  },
  {
    value: '08',
    text: '08'
  },
  {
    value: '09',
    text: '09'
  },
  {
    value: '10',
    text: '10'
  },
  {
    value: '11',
    text: '11'
  },
  {
    value: '12',
    text: '12'
  }
];

const CreditCardForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputCardNumberOnChange = e => {
    const target = e.target;

    dispatch(setCardNumber(target.value));
  };

  const inputCardHolderOnChange = e => {
    const target = e.target;

    dispatch(setCardHolder(target.value.toUpperCase()));
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
          </div>
          <div className={styles.cardBack}></div>
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
            //mask={/[0-9]/}
            onChange={inputCardHolderOnChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.group}>
          <span className={styles.groupLabel}>Expiration Date</span>
          <div className={styles.groupItem}>
            <Select defaultValue="Year" options={yaerOptions} />
          </div>
          <div className={styles.groupItem}>
            <Select defaultValue="Month" options={monthOptions} />
          </div>
        </div>
        <div className={styles.cell}>
          <Input
            type="text"
            labelText="CVV"
            onFocus={() => dispatch(setCardRotate(true))}
            onBlur={() => dispatch(setCardRotate(false))}
          />
        </div>
      </div>
    </div>
  );
};

export { CreditCardForm };
