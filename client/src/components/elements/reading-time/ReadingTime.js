import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const ReadingTime = ({ articleContent }) => {
  const readingTime = require('reading-time');

  const [stats, setStats] = useState(null);

  const convertTimeToFunThings = (
    time,
    funThing,
    timeToConsumeTheFunThingInMinutes
  ) => {
    const timeEquivalent = (time / timeToConsumeTheFunThingInMinutes).toFixed(
      1
    );
    return `${timeEquivalent} ${getTheRightEmoji(funThing)}`;
  };

  const getTheRightEmoji = (funThing) => {
    switch (funThing) {
      case 'burger':
        return '🍔';
    }
  };

  useEffect(() => {
    console.log(articleContent);
    if (articleContent && articleContent != undefined) {
      setStats(readingTime(articleContent));
    }
    console.log(stats);
  }, [articleContent]);

  return (
    <Fragment>
      {stats && stats !== undefined ? (
        <Fragment>
          Temps de lecture : {stats.minutes} minutes, soit{' '}
          {convertTimeToFunThings(stats.minutes, 'burger', 5)}
        </Fragment>
      ) : null}
    </Fragment>
  );
};

// ReadingTime.propTypes = {
//   articleContent: PropTypes.object.isRequired,
// };

export default ReadingTime;
