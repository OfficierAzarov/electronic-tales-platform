import {
  GET_TOO_LATE_TO_ASKS,
  REMOVE_TOO_LATE_TO_ASK,
  TOO_LATE_TO_ASK_ERROR,
  SET_HAS_ALREADY_BEEN_LOADED,
  SUGGEST_A_TOO_LATE_TO_ASK,
} from '../actions/types';

const initialState = {
  questions: [],
  hasAlreadyBeenLoaded: [],
  suggestedTLTA: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TOO_LATE_TO_ASKS:
      return {
        ...state,
        questions: payload,
      };
    case REMOVE_TOO_LATE_TO_ASK:
      return {
        ...state,
        questions: state.questions.filter((question) => question._id !== payload._id),
      };
    case SET_HAS_ALREADY_BEEN_LOADED:
      return {
        ...state,
        hasAlreadyBeenLoaded: [...state.hasAlreadyBeenLoaded, payload],
      };
    case TOO_LATE_TO_ASK_ERROR:
      return {
        ...state,
        error: payload,
      };
    // This case won't be useful in version 0 of Electronic Tales, but could be later
    case SUGGEST_A_TOO_LATE_TO_ASK:
      return {
        ...state,
        suggestedTLTA: [payload, ...state.suggestedTLTA],
      };
    default:
      return state;
  }
}
