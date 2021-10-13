import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Bounce from 'react-reveal/Bounce';
import Emoji from 'a11y-react-emoji';

import './Home.css';

import { setHomeAsCurrentPage, unsetHomeAsCurrentPage } from '../../../redux/actions/page';
import { sanitize } from '../../../utils/data-processing/sanitize';
import { viewportToPixels } from '../../../utils/display/converter';
import Mansion from '../../interactive-images/mansion/Mansion';
import logo from '../../../resources/img/logo-transparent.png';
import logoSmall from '../../../resources/img/logo-transparent-350.png';
import { ReactComponent as ChevronDown } from '../../../resources/img/icons/chevron-down.svg';

const Home = ({ setHomeAsCurrentPage, unsetHomeAsCurrentPage }) => {
  const { t } = useTranslation();

  useEffect(() => {
    setHomeAsCurrentPage();
    return () => {
      unsetHomeAsCurrentPage();
    };
  }, []);

  const offset = -1 * viewportToPixels('20vh');

  return (
    <div id="home">
      <div id="mansion">
        <Mansion />
      </div>
      <div id="home-worlds-container">
        <img
          src={logo}
          srcSet={`${logoSmall} 350w, ${logo} 500w`}
          id="logo"
          loading="auto"
          alt="Electronic Tales logo"
        />
        <div className="home-door-container">
          <div className="home-door" id="home-safe-space">
            <h2>{t('home.homeSafeSpace.title')}</h2>
            <p>
              {t('home.homeSafeSpace.sentence1')}
              <br />
              <br />
              {t('home.homeSafeSpace.sentence2')}
            </p>
            <Link
              to="/safe-space"
              className="basic-button"
              dangerouslySetInnerHTML={{
                __html: sanitize(t('home.homeSafeSpace.callToActionText')),
              }}
            ></Link>
            <div className="alternative-cta">
              <ScrollLink
                to="home-modern-world"
                spy={true}
                smooth={true}
                duration={500}
                offset={offset}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: sanitize(t('home.homeSafeSpace.alternativeCallToActionText')),
                  }}
                ></span>
                <Emoji symbol="🐾" label="continue the visit" />
                <div className="chevron-container">
                  <ChevronDown />
                </div>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div id="spacer"></div>
        <Bounce bottom duration={2000}>
          <div className="home-door-container">
            <div className="home-door" id="home-modern-world">
              <h2 className="neon flicker">{t('home.modernWorld.title')}</h2>
              <p>{t('home.modernWorld.sentence')}</p>
              <Link to="/modern-world" className="basic-button">
                {t('home.common.enterButtonText')}
              </Link>
              <div className="alternative-cta">
                <ScrollLink
                  to="home-imaginarium"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offset}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: sanitize(t('home.modernWorld.alternativeCallToActionText')),
                    }}
                  ></span>
                  <Emoji symbol="🕵️‍♂️" label="continue the visit" />
                  <div className="chevron-container">
                    <ChevronDown />
                  </div>
                </ScrollLink>
              </div>
            </div>
          </div>
        </Bounce>
        <Bounce bottom duration={2000}>
          <div className="home-door-container">
            <div className="home-door" id="home-imaginarium">
              <h2 className="neon flicker">{t('home.imaginarium.title')}</h2>
              <p>Imprègne-toi des mythes et légendes de la bits generation.</p>
              <Link to="/imaginarium" className="basic-button">
                Entrer
              </Link>
              <div className="alternative-cta">
                <ScrollLink
                  to="home-ancient-world"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offset}
                >
                  ...&nbsp;toujours pas&nbsp;?&nbsp;
                  <Emoji symbol="😅" label="continue the visit" />
                  <div className="chevron-container">
                    <ChevronDown />
                  </div>
                </ScrollLink>
              </div>
            </div>
          </div>
        </Bounce>
        <Bounce bottom duration={2000}>
          <div className="home-door-container">
            <div className="home-door" id="home-ancient-world">
              <h2 className="neon flicker">Ancient World</h2>
              <p>Plonge dans le monde englouti de la computer science.</p>
              <Link to="/ancient-world" className="basic-button">
                Entrer
              </Link>
              <div
                className="alternative-cta"
                onClick={() =>
                  alert(
                    "Allons bon ! Tu t'attendais à quoi ? Les neuf cercles de l'enfer ? Le département design n'avait pas assez de budget pour ça."
                  )
                }
              >
                <a href="">
                  Encore plus bas ?&nbsp;
                  <Emoji symbol="🧗" label="continue the visit" />
                  <div className="chevron-container">
                    <ChevronDown />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
      <div id="spacer-small"></div>
    </div>
  );
};

export default connect(null, { setHomeAsCurrentPage, unsetHomeAsCurrentPage })(Home);
