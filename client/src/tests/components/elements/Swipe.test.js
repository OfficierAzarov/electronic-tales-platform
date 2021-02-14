import React from 'react';
import { shallow } from 'enzyme';
 
import { Swipe } from '../../../components/elements/swipe/Swipe';
import { questionsSource } from '../../../mocks/questions';



const noQuestions = [];
const questions = questionsSource;

describe('displays checks', () => {

    it('displays swipe if there are questions', () => {
        const wrapper = shallow(<Swipe questions={questions}/>);
    
        expect(wrapper.find('#swipe-cards-container').exists()).toBeTruthy();
        expect(wrapper.find('#swipe-buttons-container').exists()).toBeTruthy();
    
        expect(wrapper.find('#no-cards-left').exists()).toBeFalsy();
        expect(wrapper.find('#no-swipe-buttons-container').exists()).toBeFalsy();
    });
    
    it('displays no swipe if there are no questions', () => {
        const wrapper = shallow(<Swipe questions={noQuestions}/>);
    
        expect(wrapper.find('#swipe-cards-container').exists()).toBeFalsy();
        expect(wrapper.find('#swipe-buttons-container').exists()).toBeFalsy();
    
        expect(wrapper.find('#no-cards-left').exists()).toBeTruthy();
        expect(wrapper.find('#no-swipe-buttons-container').exists()).toBeTruthy();
    });
}

)

// it('', () => {
//     const wrapper = shallow(<Swipe questions={noQuestions}/>);

//     expect(wrapper.find('#swipe-cards-container').exists()).toBeFalsy();
//     expect(wrapper.find('#swipe-left-action').exists()).toBeFalsy();
//     expect(wrapper.find('#swipe-right-action').exists()).toBeFalsy();

//     expect(wrapper.find('#no-cards-left').exists()).toBeTruthy();
//     expect(wrapper.find('#go-back').exists()).toBeTruthy();
// });

