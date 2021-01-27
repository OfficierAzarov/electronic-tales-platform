import { SET_CURRENT_ARTICLE, GET_ALL_ARTICLES_INFOS, ARTICLES_ERROR } from './types';
import { articlesSource } from '../../mocks/articles';
import { questionsSource } from '../../mocks/questions';
import api from '../../utils/urls/api';

export const setCurrentArticle = (slug) => async (dispatch) => {
  try {
    console.log(slug);
    const res = await api.get(`/articles/${slug}`);
    dispatch({
      type: SET_CURRENT_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLES_ERROR,
      payload: { error },
    });
  }
};

export const getAllArticlesInfos = (world) => async (dispatch) => {
  try {
    const res = await api.get(`/articles/infos/${world}`);
    dispatch({
      type: GET_ALL_ARTICLES_INFOS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status },
    });
  }
};
