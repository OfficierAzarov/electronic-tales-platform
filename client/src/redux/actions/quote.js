import { GET_QUOTES, ADD_QUOTE } from './types';

import { quotesSource } from '../../mocks/quotes';

export const getQuotes = () => (dispatch) => {
  try {
    const res = quotesSource;

    dispatch({
      type: GET_QUOTES,
      payload: res,
    });
  } catch (err) {
    // TO DO : replace by an error reducer
    console.log(err.message);
  }
};

export const addQuote = (formData) => (dispatch) => {
  try {
    // TO DO : replace by actual DB source, will be await
    const res = 'a dumb response';

    dispatch({
      type: ADD_QUOTE,
      payload: res,
    });
  } catch (err) {
    // TO DO : replace by an error reducer
    console.log(err.message);
  }
};
