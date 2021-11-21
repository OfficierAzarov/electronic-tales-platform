import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../../utils/data-processing/sanitize';

import './Imaginarium.css';

import { getAllArticlesInfos } from '../../../../redux/actions/article';
import { WORLDS } from '../../../../dictionnary/worlds';
import SwipeDoor from '../../../elements/swipe/swipe-door/SwipeDoor';
import Lab from '../../../elements/lab/Lab';
import { SLACK } from '../../../../dictionnary/externalElectronicTalesLinks';
import { IMAGINARIUM_IMAGES_PATH } from '../../../../dictionnary/internalImagesPathes';
import AllArticlesOfTheWorld from '../../../elements/article/all-articles/AllArticlesOfTheWorld';

const Imaginarium = ({ articles, getAllArticlesInfos }) => {
  useEffect(() => {
    getAllArticlesInfos(WORLDS.IMAGINARIUM);
  }, []);

  const { t } = useTranslation();

  return (
    <Fade duration={800}>
      <div id="modern-world" className="world-page container">
        <div className="line-title-wrapper world-title-wrapper">
          <h2 className="world-title">Imaginarium</h2>
        </div>
        <Lab
          text={t('common.lab.description')}
          // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
          cards={[
            {
              _id: 'sosCardId',
              title: {
                fr: "Bouton SOS syndrome de l'imposteur : un outil d'urgence pour se sentir mieux",
                en: 'English title',
              },
              link: {
                path: SLACK,
                openInNewTab: true,
              },
              thumbnail: process.env.PUBLIC_URL + IMAGINARIUM_IMAGES_PATH + 'pills-small.jpg',
            },
            {
              _id: 'tourneDisqueCardId',
              title: {
                fr: 'Le tourne-disque de mamie Cobol : partageons nos playlists pour coder',
                en: 'English title',
              },
              link: {
                path: SLACK,
                openInNewTab: true,
              },
              thumbnail: process.env.PUBLIC_URL + IMAGINARIUM_IMAGES_PATH + 'diskStore-small.jpg',
            },
          ]}
        />
        <SwipeDoor
          // This should normally come from the DB. We hardcode it here because it's still experimental. Please forgive us. With love, Electronic Tales Team.
          id={WORLDS.IMAGINARIUM}
          link={`/${WORLDS.IMAGINARIUM}/too-late-to-ask`}
          text="Toi aussi, tu te poses encore des questions de computer culture dont tu devrais déjà connaître les
        réponses&nbsp;?"
        />
        <AllArticlesOfTheWorld articles={articles} />
      </div>
    </Fade>
  );
};

Imaginarium.propTypes = {
  articles: PropTypes.array.isRequired,
  getAllArticlesInfos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.article.allArticles,
});

export default connect(mapStateToProps, { getAllArticlesInfos })(Imaginarium);
