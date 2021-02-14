import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_CONTENT } from './types';

export const setModalContent = (content) => (dispatch) => {
  dispatch({
    type: SET_MODAL_CONTENT,
    payload: content,
  });
};

export const openModal = () => (dispatch) => {
  dispatch({
    type: OPEN_MODAL
  });
};

export const closeModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL
  });
};
