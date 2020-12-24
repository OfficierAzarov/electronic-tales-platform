import { SET_CURRENT_ARTICLE } from './types';

import { articlesSource } from '../../mocks/articles';
import { questionsSource } from '../../mocks/questions';

export const setCurrentArticle = (type, slug) => (dispatch) => {

  let res;

  switch (type) {
    case 'regular-articles':
      res = articlesSource.find((article) => article.slug === slug);
      break;
    case 'swipe-answer':
      const question = questionsSource.find((question) => question.answer.slug === slug);
      res = question.answer;
      break;
    default:
      console.log('Aouch, looks like you did not provide a suitable type to find the right article.');
  }

  dispatch({
    type: SET_CURRENT_ARTICLE,
    payload: res,
  });
};