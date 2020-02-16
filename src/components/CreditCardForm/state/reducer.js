import * as A from './constants';

export const initialState = {
  cardType: 'visa',
  cardRotate: false,
  cardCvv: { value: '', isValid: false },
  cardHolder: { value: '', isValid: false },
  cardNumber: { value: '', isValid: false },
  expirationDate: {
    value: { month: 'MM', year: 'YY' },
    isValid: false
  }
};

export function reducer(state, action) {
  switch (action.type) {
    case A.SET_CARD_NUMBER: {
      const {
        payload: { value, isValid }
      } = action;
      return {
        ...state,
        cardNumber: { value, isValid }
      };
    }
    case A.SET_CARD_HOLDER: {
      const {
        payload: { value, isValid }
      } = action;
      return {
        ...state,
        cardHolder: { value, isValid }
      };
    }
    case A.SET_CARD_CVV:
      const {
        payload: { value, isValid }
      } = action;

      return {
        ...state,
        cardCvv: { value, isValid }
      };
    case A.SET_EXPIRATION_DATE_MONTH:
      return {
        ...state,
        expirationDate: {
          ...state.expirationDate,
          value: {
            ...state.expirationDate.value,
            month: action.payload.value
          },
          isValid: action.payload.isValid
        }
      };
    case A.SET_EXPIRATION_DATE_YEAR:
      return {
        ...state,
        expirationDate: {
          value: {
            ...state.expirationDate.value,
            year: action.payload.value
          },
          isValid: action.payload.isValid
        }
      };
    case A.SET_CARD_TYPE:
      return {
        ...state,
        cardType: action.payload
      };
    case A.SET_CARD_ROTATE:
      return {
        ...state,
        cardRotate: action.payload
      };
    default:
      return state;
  }
}
