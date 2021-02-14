import { GET_QUOTES, QUOTES_ERROR, SUGGEST_QUOTE } from '../actions/types';

const initialState = {
  quotes: [],
  suggestedQuote: '',
  error: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: payload,
      };
    case SUGGEST_QUOTE:
      return {
        ...state,
        suggestedQuote: payload,
      };
    case QUOTES_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
