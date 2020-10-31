import React, { Fragment } from 'react';
import TinderCard from 'react-tinder-card';

import './SwipeCard.css';
import { IMAGES_URL } from '../../utils/urls';
import { ICONS_IMAGES_URL } from '../../utils/urls';

const SwipeCard = ({ question }) => {

    const onSwipe = (direction) => {
        console.log('You swiped this: ' + direction)
    }
       
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <Fragment>            
            <TinderCard
            onSwipe={onSwipe} 
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}>
                <div className="swipe-card">
                    <div className="swipe-card-content">
                        <h2>{question.questionText}</h2>
                        <img src={`${IMAGES_URL}/${ICONS_IMAGES_URL}/${question.thumbnail}`}/>
                    </div>
                </div>
                
            </TinderCard>
        </Fragment>
    );
};

export default SwipeCard;