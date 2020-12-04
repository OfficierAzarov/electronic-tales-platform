import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
import { Swipe } from '../swipe/Swipe';
import { questionsSource } from '../../mocks/questions';

configure({ adapter: new Adapter() });

const noQuestions = [];
const questions = questionsSource;

it('displays swipe if there are questions', () => {
    const wrapper = shallow(<Swipe questions={questions}/>);

    expect(wrapper.find('#swipe-cards-container').exists()).toBeTruthy();
    expect(wrapper.find('#swipe-left-action').exists()).toBeTruthy();
    expect(wrapper.find('#swipe-right-action').exists()).toBeTruthy();

    expect(wrapper.find('#no-cards-left').exists()).toBeFalsy();
    expect(wrapper.find('#go-back').exists()).toBeFalsy();
});

it('displays no swipe if there are no questions', () => {
    const wrapper = shallow(<Swipe questions={noQuestions}/>);

    expect(wrapper.find('#swipe-cards-container').exists()).toBeFalsy();
    expect(wrapper.find('#swipe-left-action').exists()).toBeFalsy();
    expect(wrapper.find('#swipe-right-action').exists()).toBeFalsy();

    expect(wrapper.find('#no-cards-left').exists()).toBeTruthy();
    expect(wrapper.find('#go-back').exists()).toBeTruthy();
});

