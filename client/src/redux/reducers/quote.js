import { GET_QUOTES, ADD_QUOTE } from '../actions/types';

const initialState = {
  quotes: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: payload,
      };
    case ADD_QUOTE:
      return {
        ...state,
        quotes: [payload, ...state.quotes],
      };
    default:
      return state;
  }
}
