import { SET_HOME, CLEAR_HOME } from './types';

export const setHomeAsCurrentPage = () => (dispatch) => {
  dispatch({
    type: SET_HOME,
  });
};

export const unsetHomeAsCurrentPage = () => (dispatch) => {
  dispatch({
    type: CLEAR_HOME,
  });
};
