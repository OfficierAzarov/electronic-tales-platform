import { SET_CURRENT_ARTICLE } from './types';
import { articlesSource } from '../mocks/articles';

export const setCurrentArticle = (slug) => (dispatch) => {
  // try {
  const res = articlesSource.find((article) => article.slug === slug);

  if (res == undefined || res == null) console.log('No article found');

  dispatch({
    type: SET_CURRENT_ARTICLE,
    payload: res,
  });
  // } catch (err) {
  //   // TO DO : add an error action
  //   console.log(err.message);
  // }
};
