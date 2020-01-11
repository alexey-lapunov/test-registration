import * as A from './constants';

export const setCardNumber = value => ({
  type: A.SET_CARD_NUMBER,
  payload: value
});

export const setCardHolder = value => ({
  type: A.SET_CARD_HOLDER,
  payload: value
});

export const setCardRotate = value => ({
  type: A.SET_CARD_ROTATE,
  payload: value
});

export const setCardDateMonth = value => ({
  type: A.SET_EXPIRATION_DATE_MONTH,
  payload: value
});

export const setCardDateYear = value => ({
  type: A.SET_EXPIRATION_DATE_YEAR,
  payload: value
});

export const setCardCvv = value => ({
  type: A.SET_CARD_CVV,
  payload: value
});

export const setCardType = value => ({
  type: A.SET_CARD_TYPE,
  payload: value
});
