import { SET_CURRENT_ARTICLE } from '../actions/types';

const initialState = {
  currentArticle: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        currentArticle: payload,
      };
    default:
      return state;
  }
}
