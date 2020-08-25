import { SET_CURRENT_PATH } from '../actions/types';

export const setCurrentPath = (currentPath) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PATH,
    payload: currentPath,
  });
};
