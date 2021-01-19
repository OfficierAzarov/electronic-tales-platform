import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import Article from '../../../components/elements/article/Article';
import { setCurrentArticle } from '../../../redux/actions/article';
import { SET_CURRENT_ARTICLE } from '../../../redux/actions/types';
import { articlesSource } from '../../../mocks/articles';
import { questionsSource } from '../../../mocks/questions';

const middleware = [thunk];
const buildStore = configureStore(middleware);

let store;
let wrapper;
let props;
const initialState = { article: { currentArticle: {} } };

describe('Article redux', () => {
  beforeEach(() => {
    store = buildStore(initialState);
    wrapper = shallow(<Article store={store} />);
    props = wrapper.props().children.props;
  });

  afterEach(() => {
    store.clearActions();
  });

  it('passes article from state to props', () => {
    expect(props.article).toBe(initialState.article.currentArticle);
  });

  it('dispatches the correct action for regular-articles', () => {
    const article = articlesSource[0];
    const expectedAction = [
      {
        payload: article,
        type: SET_CURRENT_ARTICLE,
      },
    ];
    store.dispatch(setCurrentArticle('regular-articles', 'what-is-a-port'));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches the correct action for swipe-answers', () => {
    const question = questionsSource[0].answer;
    const expectedAction = [
      {
        payload: question,
        type: SET_CURRENT_ARTICLE,
      },
    ];
    store.dispatch(setCurrentArticle('swipe-answers', 'what-is-a-backdoor'));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
