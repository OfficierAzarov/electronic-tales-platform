import React from 'react';
import TinderCard from 'react-tinder-card';

import './SwipeCard.css';

const SwipeCard = () => {
    return (
        <div>
            <TinderCard className="absolute" 
            onSwipe={onSwipe} 
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}>Card</TinderCard>
            
        </div>
    );
};

export default SwipeCard;