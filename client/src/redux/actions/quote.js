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
    console.log(error);
    // dispatch({
    //   type: QUOTES_ERROR,
    //   payload: { msg: error.response.statusText, status: error.response.status },
    // });
  }
};

export const suggestQuote = (formData, reCaptchaToken) => async (dispatch) => {
  try {
    const postData = { ...formData, reCaptchaToken };
    console.log('postData are', postData);
    const res = await api.post('/suggestions/quotes', postData);
    if (res.status === 200) {
      dispatch({
        type: SUGGEST_QUOTE,
        payload: res.data,
      });
      return 'success';
    }
  } catch (error) {
    console.error('The error is ' + error.response.status);
    return error.response.status;
  }
};
