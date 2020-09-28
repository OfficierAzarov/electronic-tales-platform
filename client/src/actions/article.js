import { SET_CURRENT_ARTICLE } from './types';
import { articlesSource } from '../mocks/articles';

export const setCurrentArticle = (articleId) => (dispatch) => {
  const articleToDisplay = articlesSource.find(
    (article) => article.id === articleId
  );

  dispatch({
    type: SET_CURRENT_ARTICLE,
    payload: articleToDisplay,
  });
};
