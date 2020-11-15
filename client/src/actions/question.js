import { GET_QUESTIONS } from './types';
import { questionsSource } from '../mocks/questions';

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