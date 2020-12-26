import { GET_QUOTES } from './types';

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
