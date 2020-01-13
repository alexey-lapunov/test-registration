import * as ACTIONS_TYPES from './constants';

export const setCardNumber = value => ({
  type: ACTIONS_TYPES.SET_CARD_NUMBER,
  payload: value
});

export const setCardHolder = value => ({
  type: ACTIONS_TYPES.SET_CARD_HOLDER,
  payload: value
});

export const setCardRotate = value => ({
  type: ACTIONS_TYPES.SET_CARD_ROTATE,
  payload: value
});

export const setCardDateMonth = value => ({
  type: ACTIONS_TYPES.SET_EXPIRATION_DATE_MONTH,
  payload: value
});

export const setCardDateYear = value => ({
  type: ACTIONS_TYPES.SET_EXPIRATION_DATE_YEAR,
  payload: value
});

export const setCardCvv = value => ({
  type: ACTIONS_TYPES.SET_CARD_CVV,
  payload: value
});

export const setCardType = value => ({
  type: ACTIONS_TYPES.SET_CARD_TYPE,
  payload: value
});

export const setFormValid = value => ({
  type: ACTIONS_TYPES.SET_FORM_VALID,
  payload: value
});
