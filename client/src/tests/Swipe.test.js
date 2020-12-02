import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Provider from 'react-redux';
import store from '../store';
 
import Swipe from '../components/layout/swipe/Swipe';

configure({ adapter: new Adapter() });

const noQuestions = [];

describe('displays no cards left if there are no questions', () => {
    const wrapper = shallow(<Swipe questions={noQuestions}/>);

    expect(wrapper.find('#no-cards-left').exists);
})
