import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
import { Swipe } from '../components/layout/swipe/Swipe';
import { questionsSource } from '../mocks/questions';

configure({ adapter: new Adapter() });

const noQuestions = [];
const questions = questionsSource;

it('displays "#swipe-cards-container" div if there are questions', () => {
    const wrapper = shallow(<Swipe questions={questions}/>);
    expect(wrapper.find('#no-cards-left').exists()).toBeFalsy();
    expect(wrapper.find('#swipe-cards-container').exists()).toBeTruthy();
});

it('displays a "no-cards-left" div if there are no questions', () => {
    const wrapper = shallow(<Swipe questions={noQuestions}/>);
    expect(wrapper.find('#swipe-cards-container').exists()).toBeFalsy();
    expect(wrapper.find('#no-cards-left').exists()).toBeTruthy();
});

