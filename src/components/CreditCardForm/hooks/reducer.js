import * as A from './constants';

export const initialState = {
  cardNumber: '',
  cardHolder: '',
  cardCvv: '',
  expirationDate: {
    month: '',
    year: ''
  }
};

export function reducer(state, action) {
  switch (action.type) {
    case A.SET_CARD_NUMBER:
      return {
        ...state,
        cardNumber: action.payload
      };
    case A.SET_CARD_HOLDER:
      return {
        ...state,
        cardHolder: action.payload
      };
    case A.SET_CARD_CVV:
      return {
        ...state,
        cardCvv: action.payload
      };
    case A.SET_EXPIRATION_DATE_MONTH:
      return {
        ...state,
        expirationDate: {
          ...state.expirationDate,
          month: action.payload
        }
      };
    case A.SET_EXPIRATION_DATE_YEAR:
      return {
        ...state,
        expirationDate: {
          ...state.expirationDate,
          year: action.payload
        }
      };
    default:
      return state;
  }
}
