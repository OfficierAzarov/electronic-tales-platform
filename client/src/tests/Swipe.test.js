import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Provider from 'react-redux';
import store from '../store';
 
import { Swipe } from '../components/layout/swipe/Swipe';

configure({ adapter: new Adapter() });

const noQuestions = [];

it('displays a "no-cards-left" div if there are no questions', () => {
    const wrapper = shallow(<Swipe questions={noQuestions}/>);
    expect(wrapper.find('TinderCard').exists()).toBeFalsy();
    expect(wrapper.find('#no-cards-left').exists()).toBeTruthy();
});
