import { GET_QUESTIONS, REMOVE_QUESTION, SET_INITIAL_LOADING } from '../actions/types';

const initialState = {
  questions: [],
  initialLoading: true
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
      };
    case REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(question => question.id !== payload.id)
      };
    case SET_INITIAL_LOADING:
      return {
        ...state,
        initialLoading: payload
      };
    default:
      return state;
  }
}
