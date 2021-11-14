import { SET_LANGUAGE } from '../actions/types';

const initialState = { preferredLanguage: 'fr' };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        preferredLanguage: payload,
      };
    default:
      return state;
  }
}
