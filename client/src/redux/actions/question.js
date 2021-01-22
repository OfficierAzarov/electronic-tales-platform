import {
  GET_TOO_LATE_TO_ASKS,
  REMOVE_TOO_LATE_TO_ASK,
  TOO_LATE_TO_ASK_ERROR,
  SET_INITIAL_LOADING,
} from './types';
import api from '../../utils/urls/api';

export const getTooLateToAsks = () => async (dispatch) => {
  try {
    const res = await api.get('/toolatetoasks');

    dispatch({
      type: GET_TOO_LATE_TO_ASKS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: TOO_LATE_TO_ASK_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
};

export const setInitialLoading = (value) => (dispatch) => {
  try {
    dispatch({
      type: SET_INITIAL_LOADING,
      payload: value,
    });
  } catch (err) {
    // TO DO : replace by an error reducer
    console.log(err.message);
  }
};

export const removeATooLateToAsk = (questionToRemove) => (dispatch) => {
  dispatch({
    type: REMOVE_TOO_LATE_TO_ASK,
    payload: questionToRemove,
  });
  // TO DO : add error
};
