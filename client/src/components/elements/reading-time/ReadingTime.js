import React from 'react';
import PropTypes from 'prop-types';
import { getRandomIntegerFromAGivenRange } from '../../../utils/maths/maths';

import './ReadingTime.css';

const ReadingTime = ({ articleContent }) => {
  const readingTime = require('reading-time');

  const funnyThingsList = [
    {
      consumingAction: 'croquer',
      gender: 'masculin',
      name: 'burger',
      emoji: '🍔',
      timeToConsumeTheFunThingInMinutes: 5,
    },
    {
      consumingAction: 'siroter',
      name: 'café',
      emoji: '☕',
      gender: 'masculin',
      timeToConsumeTheFunThingInMinutes: 1,
    },
    {
      consumingAction: 'glouper',
      name: 'doughnut',
      emoji: '🍩',
      gender: 'masculin',
      timeToConsumeTheFunThingInMinutes: 2,
    },
    {
      consumingAction: 'crisper',
      name: 'frites',
      emoji: '🍟',
      gender: 'feminin',
      timeToConsumeTheFunThingInMinutes: 2,
    },
  ];

  const randomlyPickAFunnyThing = (funnyThings) => {
    const randomInteger = getRandomIntegerFromAGivenRange(0, funnyThings.length - 1);
    return funnyThings[randomInteger];
  };

  const generateReadingTimeSentence = () => {
    const stats = readingTime(articleContent);
    const funnyThing = randomlyPickAFunnyThing(funnyThingsList);
    const percentageOfTheFunActionDuration =
      (stats.minutes / funnyThing.timeToConsumeTheFunThingInMinutes).toFixed(1) * 100;

    return `🕑 Lecture : ${stats.minutes} minutes,
        soit le temps de ${funnyThing.consumingAction} ${percentageOfTheFunActionDuration} % 
        d'${funnyThing.gender === 'feminin' ? 'une' : 'un'} ${funnyThing.emoji}.`;
  };

  return <div id="reading-time">{generateReadingTimeSentence()}</div>;
};

ReadingTime.propTypes = {
  articleContent: PropTypes.string.isRequired,
};

export default ReadingTime;
