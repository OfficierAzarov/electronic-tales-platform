import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

import './ModernWorld.css';

import { getAllArticlesInfos } from '../../../../redux/actions/article';
import { WORLDS } from '../../../../dictionnary/worlds';
import SwipeDoor from '../../../elements/swipe/swipe-door/SwipeDoor';
import AllArticlesOfTheWorld from '../../../elements/article/all-articles/AllArticlesOfTheWorld';
import Lab from '../../../elements/lab/Lab';
import { SLACK } from '../../../../dictionnary/externalElectronicTalesLinks';
import { MODERN_WORLD_IMAGES_PATH } from '../../../../dictionnary/internalImagesPathes';
import RoadmapDoor from '../../../elements/roadmap/roadmap-door/RoadmapDoor';

const ModernWorld = ({ articles, getAllArticlesInfos }) => {
  useEffect(() => {
    getAllArticlesInfos(WORLDS.MODERN_WORLD);
  }, []);

  const { t } = useTranslation();

  return (
    <Fade duration={1500}>
      <div id="modern-world" className="world-page container">
        <div className="line-title-wrapper world-title-wrapper">
          <h2 className="world-title neon flicker">{t('modernWorld.title')}</h2>
        </div>

        <Lab
          // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
          text={t('common.lab.description')}
          cards={[
            {
              _id: 'salaryCardId',
              title: {
                fr: 'Le mur des salaires des devs juniors : partageons les vrais chiffres !',
                en: "The junior devs salary wall: let's share the real numbers!",
              },
              link: {
                path: SLACK,
                openInNewTab: true,
              },
              thumbnail: process.env.PUBLIC_URL + MODERN_WORLD_IMAGES_PATH + 'money-small.jpg',
            },
            {
              _id: 'tamagotchiCardId',
              title: {
                fr:
                  'Le tamagotchi des devs : tracke tes progrès et compare-les à ceux des autres en toute bienveillance',
                en:
                  "Dev's tamagotchi: track your progress and compare it to others in a friendly way",
              },
              link: {
                path: SLACK,
                openInNewTab: true,
              },
              thumbnail: process.env.PUBLIC_URL + MODERN_WORLD_IMAGES_PATH + 'tamagotchi-small.jpg',
            },
          ]}
        />
        <SwipeDoor
          // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
          id={WORLDS.MODERN_WORLD}
          link="/modern-world/too-late-to-ask"
          text={t('modernWorld.swipeDoor')}
        />
        <RoadmapDoor />
        <AllArticlesOfTheWorld articles={articles} />
      </div>
    </Fade>
  );
};

ModernWorld.propTypes = {
  articles: PropTypes.array.isRequired,
  getAllArticlesInfos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.article.allArticles,
});

export default connect(mapStateToProps, { getAllArticlesInfos })(ModernWorld);
