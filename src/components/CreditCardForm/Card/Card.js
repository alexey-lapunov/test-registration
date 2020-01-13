import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition
} from 'react-transition-group';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Card.module.scss';

import dateTranstion from './transitions/date.module.scss';
import chartTranstion from './transitions/chart.module.scss';

import mrImg from 'static/img/mr.jpg';
import visaIcon from 'static/icons/visa.png';
import troyIcon from 'static/icons/troy.png';
import amexIcon from 'static/icons/amex.png';
import discoverIcon from 'static/icons/discover.png';
import mastercardIcon from 'static/icons/mastercard.png';

const cardTypeIcons = {
  visa: visaIcon,
  amex: amexIcon,
  troy: troyIcon,
  discover: discoverIcon,
  mastercard: mastercardIcon
};

export const Card = ({
  cardCvv,
  cardType,
  cardNumber,
  cardRotate,
  cardHolder,
  expirationDate
}) => {
  return (
    <div
      className={classnames(styles.card, {
        [styles.rotate]: cardRotate
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
                key={cardType}
                addEndListener={(node, done) => {
                  node.addEventListener('transitionend', done, false);
                }}
              >
                <img
                  alt=""
                  className={styles.cardTypeIcon}
                  src={cardTypeIcons[cardType]}
                />
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className={styles.cardNumber}>
            {Array.from(Array(16)).map((item, i) => {
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
                {Array.from(cardHolder).map((chart, i) => (
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
                  key={expirationDate.month}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, false);
                  }}
                >
                  <span className={styles.cardDateMonth}>
                    {expirationDate.month}
                  </span>
                </CSSTransition>
              </SwitchTransition>
              {'/'}
              <SwitchTransition mode="out-in">
                <CSSTransition
                  appear
                  timeout={500}
                  classNames={dateTranstion}
                  key={expirationDate.year}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, false);
                  }}
                >
                  <span className={styles.cardDateYear}>
                    {expirationDate.year.slice(-2)}
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
            <div className={styles.cardCvvBand}>{cardCvv}</div>
            <div className={styles.cardCvvType}>
              <img
                alt=""
                src={cardTypeIcons[cardType]}
                className={styles.cardCvvTypeIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardCvv: PropTypes.string,
  cardType: PropTypes.string,
  cardRotate: PropTypes.bool,
  cardNumber: PropTypes.string,
  cardHolder: PropTypes.string,
  expirationDate: PropTypes.object
};

Card.defaultProps = {
  cardCvv: '',
  cardType: '',
  cardRotate: '',
  cardNumber: '',
  cardHolder: '',
  expirationDate: { month: 'MM', year: 'YY' }
};
