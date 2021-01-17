import { SET_CURRENT_ARTICLE, GET_ALL_ARTICLES_INFOS, ARTICLES_ERROR } from '../actions/types';

const initialState = {
  allArticles: [],
  currentArticle: {
    id: '',
    title: '',
    slug: '',
    content: '',
    richLinks: [],
    thumbnail: '',
    category: '',
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        currentArticle: payload,
      };
    case GET_ALL_ARTICLES_INFOS:
      return {
        ...state,
        allArticles: payload,
      };
    case ARTICLES_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
