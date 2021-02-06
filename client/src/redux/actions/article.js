import {
  SET_CURRENT_ARTICLE,
  CLEAN_CURRENT_ARTICLE,
  GET_ALL_ARTICLES_INFOS,
  ARTICLES_ERROR,
} from './types';

import api from '../../utils/urls/api';

export const setCurrentArticle = (slug) => async (dispatch) => {
  try {
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

export const cleanCurrentArticle = () => (dispatch) => {
  dispatch({
    type: CLEAN_CURRENT_ARTICLE,
  });
};

export const getAllArticlesInfos = (world) => async (dispatch) => {
  try {
    const res = await api.get(`/articles/infos/${world}`);
    dispatch({
      type: GET_ALL_ARTICLES_INFOS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: ARTICLES_ERROR,
    //   payload: { msg: error.response.statusText, status: error.response.status },
    // });
  }
};
