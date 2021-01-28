import {
  GET_TOO_LATE_TO_ASKS,
  REMOVE_TOO_LATE_TO_ASK,
  TOO_LATE_TO_ASK_ERROR,
  SET_HAS_ALREADY_BEEN_LOADED,
} from '../actions/types';

const initialState = {
  questions: [],
  hasAlreadyBeenLoaded: [],
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
    default:
      return state;
  }
}
