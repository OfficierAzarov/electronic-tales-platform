import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import Article from '../../../components/elements/article/Article';

const middleware = [thunk];
const buildStore = configureStore(middleware);

describe('Article', () => {

    let store;
    let wrapper;
    const initialState = { article: {currentArticle: {}}};

    beforeEach(() => {
        store = buildStore(initialState);
        wrapper = shallow(<Article store={store} />);
        console.log(wrapper.props());
    });

    it('passes article from state', () => {
        expect(wrapper.props().children.props.article).toBe(initialState.article.currentArticle);
    });

    // it("can click yellow", () => {
    //     const color = "yellow";
    //     wrapper.props().onClick(color)();
    //     expect(store.getActions()).toContainEqual(saveColor({ color }));
    // });

})


