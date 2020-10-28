import { GET_QUESTIONS } from '../actions/types';

const initialState = {
  questions: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
      };
    default:
      return state;
  }
}
