import { CLEAR_HOME, SET_HOME } from '../actions/types';

const initialState = {
  isCurrentPageHome: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case SET_HOME:
      return {
        ...state,
        isCurrentPageHome: true,
      };
    case CLEAR_HOME:
      return {
        ...state,
        isCurrentPageHome: false,
      };
    default:
      return state;
  }
}
