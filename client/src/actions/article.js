import { SET_CURRENT_ARTICLE } from './types';
import { articlesSource } from '../mocks/articles';

export const setCurrentArticle = (articleId) => (dispatch) => {
  const articleToDisplay = articlesSource.filter(
    (article) => article.id === articleId
  );

  console.log(articleToDisplay);

  dispatch({
    type: SET_CURRENT_ARTICLE,
    payload: articleToDisplay,
  });
};
