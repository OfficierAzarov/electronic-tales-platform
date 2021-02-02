import { GET_QUOTES, QUOTES_ERROR, SUGGEST_QUOTE } from './types';
import api from '../../utils/urls/api';

export const getQuotes = () => async (dispatch) => {
  try {
    const res = await api.get(`/quotes`);

    dispatch({
      type: GET_QUOTES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: QUOTES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
};

export const suggestQuote = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/suggestions/quotes', formData);

    dispatch({
      type: SUGGEST_QUOTE,
      payload: res.data,
    });
  } catch (error) {
    // TO DO : replace by an error reducer
    console.log(error.message);
    dispatch({
      type: QUOTES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
};
