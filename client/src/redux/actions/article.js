import { SET_CURRENT_ARTICLE, GET_ALL_ARTICLES_INFOS, ARTICLES_ERROR } from './types';
import { articlesSource } from '../../mocks/articles';
import { questionsSource } from '../../mocks/questions';
import api from '../../utils/urls/api';

export const setCurrentArticle = (type, slug) => async (dispatch) => {
  let res;
  try {
    switch (type) {
      case 'regular-articles':
        res = articlesSource.find((article) => article.slug === slug);
        break;
      case 'swipe-answer':
        const question = questionsSource.find((question) => question.answer.slug === slug);
        res = question.answer;
        break;
      default:
        console.log(
          'Aouch, looks like you did not provide a suitable type to find the right article.'
        );
    }

    dispatch({
      type: SET_CURRENT_ARTICLE,
      payload: res,
    });
  } catch (error) {
    // TO DO : replace by an error reducer
    console.log(error.message);
  }
};

export const getAllArticlesInfos = () => async (dispatch) => {
  try {
    const res = await api.get('/articles/infos');
    dispatch({
      type: GET_ALL_ARTICLES_INFOS,
      payload: res.data,
    });
  } catch (error) {
    console.log('oups');
    // dispatch({
    //   type: ARTICLES_ERROR,
    //   payload: { msg: error.response.statusText, status: error.response.status },
    // });
  }
};
