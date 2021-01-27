import {
  GET_TOO_LATE_TO_ASKS,
  REMOVE_TOO_LATE_TO_ASK,
  TOO_LATE_TO_ASK_ERROR,
  SET_HAS_ALREADY_BEEN_LOADED,
} from './types';
import api from '../../utils/urls/api';

export const getTooLateToAsks = (world) => async (dispatch) => {
  try {
    const res = await api.get(`/toolatetoasks/${world}`);
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

export const setHasAlreadyBeenLoaded = (TooLateToAskOfAWorld) => (dispatch) => {
  dispatch({
    type: SET_HAS_ALREADY_BEEN_LOADED,
    payload: TooLateToAskOfAWorld,
  });
};

export const removeATooLateToAsk = (questionToRemove) => (dispatch) => {
  dispatch({
    type: REMOVE_TOO_LATE_TO_ASK,
    payload: questionToRemove,
  });
};
