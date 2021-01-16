import { GET_CATEGORIES, CATEGORIES_ERROR } from './types';
import api from '../../utils/urls/api';

export const getCategories = () => async (dispatch) => {
  try {
    const res = await api.get('/categories');

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
