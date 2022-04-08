import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

import './AncientWorld.css';

import { getAllArticlesInfos } from '../../../../redux/actions/article';
import { WORLDS } from '../../../../dictionnary/worlds';
import TinderDoor from '../../../elements/tinder/tinder-door/TinderDoor';
import AllArticlesOfTheWorld from '../../../elements/article/all-articles/AllArticlesOfTheWorld';

const AncientWorld = ({ articles, getAllArticlesInfos }) => {
  useEffect(() => {
    getAllArticlesInfos(WORLDS.ANCIENT_WORLD);
  }, []);

  const { t } = useTranslation();

  return (
    <Fade duration={1500}>
      <div id="ancient-world" className="world-page container">
        <div className="line-title-wrapper world-title-wrapper">
          <h2 className="world-title">Ancient World</h2>
        </div>
        <p id="warning">COMING SOON</p>
        <div id="coming-soon-overlay">
          <TinderDoor
            // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
            id={WORLDS.ANCIENT_WORLD}
            link={`/${WORLDS.ANCIENT_WORLD}/too-late-to-ask`}
            text={t('ancientWorld.swipeDoor')}
            imageFileName="cat3"
          />
        </div>
        <AllArticlesOfTheWorld articles={articles} />
      </div>
    </Fade>
  );
};

AncientWorld.propTypes = {
  articles: PropTypes.array.isRequired,
  getAllArticlesInfos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.article.allArticles,
});

export default connect(mapStateToProps, { getAllArticlesInfos })(AncientWorld);
