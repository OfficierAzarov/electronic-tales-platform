import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Emoji from 'a11y-react-emoji';
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
      timeToConsumeTheFunThingInMinutes: 2,
    },
    {
      consumingAction: 'glouper',
      name: 'doughnut',
      emoji: '🍩',
      gender: 'masculin',
      timeToConsumeTheFunThingInMinutes: 3,
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

  const displayTimeInAReadableWay = (readingTime) => {
    if (readingTime < 1) return `moins d'une minute`;
    return convertMinutesToMinutesAndSeconds(readingTime);
  };

  const convertMinutesToMinutesAndSeconds = (readingTimeinMinutes) => {
    const min = Math.floor(Math.abs(readingTimeinMinutes));
    // const sec = Math.floor((Math.abs(readingTimeinMinutes) * 60) % 60);
    return min + ' min';
  };

  const generateReadingTimeSentence = () => {
    if (articleContent) {
      const stats = readingTime(articleContent);
      const funnyThing = randomlyPickAFunnyThing(funnyThingsList);
      const percentageOfTheFunActionDuration =
        (stats.minutes / funnyThing.timeToConsumeTheFunThingInMinutes).toFixed(1) * 100;

      return (
        <Fragment>
          <p>
            <Emoji symbol="🕑" label="clock" />
            &nbsp;Lecture&nbsp;: {displayTimeInAReadableWay(stats.minutes)}, <br /> soit le temps de{' '}
            {funnyThing.consumingAction} {percentageOfTheFunActionDuration} % d'
            {funnyThing.gender === 'feminin' ? 'une' : 'un '}{' '}
            <Emoji symbol={funnyThing.emoji} label={funnyThing.name} />
          </p>
        </Fragment>
      );
    }
  };

  return <div id="reading-time">{generateReadingTimeSentence()}</div>;
};

ReadingTime.propTypes = {
  articleContent: PropTypes.string.isRequired,
};

export default ReadingTime;
