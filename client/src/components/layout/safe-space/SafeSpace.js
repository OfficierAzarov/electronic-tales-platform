import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'a11y-react-emoji';
import { useTranslation } from 'react-i18next';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../utils/data-processing/sanitize';

import './SafeSpace.css';
import MiniNav from '../../elements/mini-nav/MiniNav';

const SafeSpace = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { t } = useTranslation();

  return (
    <div id="safe-space" className="container">
      <div className="line-title-wrapper world-title-wrapper">
        <h2 className="world-title neon flicker">{t('safeSpace.title')}</h2>
      </div>
      <MiniNav />
      <div className="line-title-wrapper category-title-wrapper">
        <h3
          className="title"
          dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
            t('safeSpace.why.why.title')
          )}
        ></h3>
      </div>
      <p
        dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
          t('safeSpace.why.why.body')
        )}
      ></p>
      <div className="line-title-wrapper category-title-wrapper">
        <h3
          className="title"
          dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
            t('safeSpace.why.debug.title')
          )}
        ></h3>
      </div>
      <p
        dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
          t('safeSpace.why.debug.body.text')
        )}
      ></p>
      <ul
        dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
          t('safeSpace.why.debug.body.list')
        )}
      ></ul>
      <div className="line-title-wrapper category-title-wrapper">
        <h3
          className="title"
          dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
            t('safeSpace.why.go.title')
          )}
        ></h3>
      </div>
      <p>
        <p
          dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
            t('safeSpace.why.go.body.text')
          )}
          className="inline"></p>
        <Link to="/safe-space/quotes">{t('safeSpace.why.go.body.link1Name')}</Link>,{' '}
        {t('safeSpace.why.go.body.link1Description')}.
        <br />
        <br />
        {t('safeSpace.why.go.body.link2Description')}{' '}
        <Link to="/safe-space/chat">{t('safeSpace.why.go.body.link2Name')}</Link>.
      </p>
    </div>
  );
};

export default SafeSpace;
