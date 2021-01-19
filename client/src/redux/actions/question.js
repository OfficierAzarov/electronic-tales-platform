import { GET_QUESTIONS, REMOVE_QUESTION, SET_INITIAL_LOADING } from './types';
import { questionsSource } from '../../mocks/questions';

export const getQuestions = () => (dispatch) => {
  try {
    // TO DO : replace by actual DB source, will be await
    const res = questionsSource;

    dispatch({
      type: GET_QUESTIONS,
      payload: res,
    });
  } catch (err) {
    // TO DO : replace by an error reducer
    console.log(err.message);
  }
};

export const setInitialLoading = (value) => (dispatch) => {
  console.log(value);
  try {
    dispatch({
      type: SET_INITIAL_LOADING,
      payload: value,
    });
  } catch (err) {
    // TO DO : replace by an error reducer
    console.log(err.message);
  }
};

export const removeAQuestion = (questionToRemove) => (dispatch) => {
  dispatch({
    type: REMOVE_QUESTION,
    payload: questionToRemove,
  });
};
