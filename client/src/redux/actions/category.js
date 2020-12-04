import { GET_CATEGORIES } from './types';
import { categoriesSource } from '../../mocks/categories';

export const getCategories = () => (dispatch) => {
  try {
    // TO DO : replace by actual DB source, will be await
    const res = categoriesSource;

    dispatch({
      type: GET_CATEGORIES,
      payload: res,
    });
  } catch (err) {
    // TO DO : replace by an error reducer
    console.log(err.message);
  }
};
