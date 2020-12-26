import { GET_QUOTES } from '../actions/types';

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
    default:
      return state;
  }
}
