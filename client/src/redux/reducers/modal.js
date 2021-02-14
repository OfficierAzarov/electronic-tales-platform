import { SET_MODAL_CONTENT, OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
  modalContent: '',
  openModal: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_MODAL_CONTENT:
      return {
        ...state,
        modalContent: payload,
      };
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };
    default:
      return state;
  }
}
