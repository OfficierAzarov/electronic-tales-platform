import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Emoji from 'a11y-react-emoji';
import { useTranslation } from 'react-i18next';
import { getRandomIntegerFromAGivenRange } from '../../../utils/maths/maths';

import './ReadingTime.css';

const ReadingTime = ({ articleContent }) => {

  const { t } = useTranslation();

  const readingTime = require('reading-time');

  const funnyThingsList = [
    {
      consumingAction: t('common.readingTime.funnyThingsList.consumingActions.bite'),
      gender: t('common.readingTime.funnyThingsList.genders.male'),
      name: t('common.readingTime.funnyThingsList.names.burger'),
      emoji: '🍔',
      timeToConsumeTheFunThingInMinutes: 5,
    },
    {
      consumingAction: t('common.readingTime.funnyThingsList.consumingActions.sip'),
      name: t('common.readingTime.funnyThingsList.names.coffee'),
      emoji: '☕',
      gender: t('common.readingTime.funnyThingsList.genders.male'),
      timeToConsumeTheFunThingInMinutes: 2,
    },
    {
      consumingAction: t('common.readingTime.funnyThingsList.consumingActions.gloop'),
      name: t('common.readingTime.funnyThingsList.names.doughnut'),
      emoji: '🍩',
      gender: t('common.readingTime.funnyThingsList.genders.male'),
      timeToConsumeTheFunThingInMinutes: 3,
    },
    {
      consumingAction: t('common.readingTime.funnyThingsList.consumingActions.crisp'),
      name: t('common.readingTime.funnyThingsList.names.fries'),
      emoji: '🍟',
      gender: t('common.readingTime.funnyThingsList.genders.female'),
      timeToConsumeTheFunThingInMinutes: 2,
    },
  ];

  const randomlyPickAFunnyThing = (funnyThings) => {
    const randomInteger = getRandomIntegerFromAGivenRange(0, funnyThings.length - 1);
    return funnyThings[randomInteger];
  };

  const displayTimeInAReadableWay = (readingTime) => {
    if (readingTime < 1) return t('common.readingTime.lessThanAMinute');
    return convertMinutesToMinutesAndSeconds(readingTime);
  };

  const convertMinutesToMinutesAndSeconds = (readingTimeinMinutes) => {
    const min = Math.floor(Math.abs(readingTimeinMinutes));
    return min + ' min';
  };

  const returnComponentXTimes = (fraction, funnyThing) => {
    const times = Math.round(fraction);
    if (times == 1) {
      return (
        <Fragment>
          un&nbsp;
          <Emoji symbol={funnyThing.emoji} label={funnyThing.name} />
        </Fragment>
      );
    } else {
      const componentsToReturn = [];
      for (let i = 0; i < times; i++) {
        componentsToReturn.push(<Emoji symbol={funnyThing.emoji} label={funnyThing.name} />);
      }
      return componentsToReturn;
    }
  };

  const defineArticle = (gender) => {
    // article is only useful in french
    switch (gender) {
      case ("féminin"):
        return 'une';
      case ("masculin"):
        return 'un';
      default:
        return ''
    }
  }

  const generateReadingTimeSentence = () => {
    if (articleContent) {
      const stats = readingTime(articleContent);
      const funnyThing = randomlyPickAFunnyThing(funnyThingsList);
      const fraction = (stats.minutes / funnyThing.timeToConsumeTheFunThingInMinutes).toFixed(1);

      if (fraction <= 1) {
        return (
          <Fragment>
            <p>
              🕑&nbsp;{t('common.readingTime.readingTime')}&nbsp;: {displayTimeInAReadableWay(stats.minutes)}, <br /> {t('common.readingTime.justEnoughTimeTo')} {funnyThing.consumingAction} {fraction * 100}&nbsp;% {t('common.readingTime.ofA')}
              {defineArticle(funnyThing.gender)}{' '}
              {/* {funnyThing.gender === 'féminin' ? 'une' : 'un '}{' '} */}
              <Emoji symbol={funnyThing.emoji} label={funnyThing.name} />.
            </p>
          </Fragment>
        );
      } else {
        return (
          <Fragment>
            <p>
              🕑&nbsp;{t('common.readingTime.readingTime')}&nbsp;: {displayTimeInAReadableWay(stats.minutes)}, <br /> {t('common.readingTime.justEnoughTimeTo')} {funnyThing.consumingAction} {returnComponentXTimes(fraction, funnyThing)}.
            </p>
          </Fragment>
        );
      }
    }
  };

  return <div id="reading-time">{generateReadingTimeSentence()}</div>;
};

ReadingTime.propTypes = {
  articleContent: PropTypes.string.isRequired,
};

export default ReadingTime;
