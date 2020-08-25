import { SET_CURRENT_PATH } from '../actions/types';

const initialState = {
  currentPath: '/',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_PATH:
      return { ...state, currentPath: payload };
    default:
      return state;
  }
}
