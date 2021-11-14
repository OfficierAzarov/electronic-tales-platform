import { SET_LANGUAGE } from './types';

export const setLanguage = (language) => (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: language,
  });
};
