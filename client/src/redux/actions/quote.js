import { GET_QUOTES, QUOTES_ERROR, ADD_QUOTE } from './types';
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

export const addQuote = (formData) => async (dispatch) => {
  try {
    // TO DO : replace by actual DB source, will be await
    const res = await fetch('dumbFetch');

    dispatch({
      type: ADD_QUOTE,
      payload: res,
    });
  } catch (error) {
    // TO DO : replace by an error reducer
    console.log(error.message);
  }
};
