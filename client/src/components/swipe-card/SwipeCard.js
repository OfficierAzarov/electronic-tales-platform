import React from 'react';
import TinderCard from 'react-tinder-card';

import './SwipeCard.css';

const SwipeCard = ({ question }) => {

    const onSwipe = (direction) => {
        console.log('You swiped this: ' + direction)
    }
       
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className="swipe-card-container">            
            <TinderCard
            onSwipe={onSwipe} 
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}><div className="swipe-card">{question.questionText}</div></TinderCard>
        </div>
    );
};

export default SwipeCard;