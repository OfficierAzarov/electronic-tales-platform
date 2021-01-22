import {
  GET_TOO_LATE_TO_ASKS,
  REMOVE_TOO_LATE_TO_ASK,
  TOO_LATE_TO_ASK_ERROR,
  SET_INITIAL_LOADING,
} from '../actions/types';

const initialState = {
  questions: [],
  initialLoading: true,
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
        questions: state.questions.filter((question) => question.id !== payload.id),
      };
    case SET_INITIAL_LOADING:
      return {
        ...state,
        initialLoading: payload,
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
