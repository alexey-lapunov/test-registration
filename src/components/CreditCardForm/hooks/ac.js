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
