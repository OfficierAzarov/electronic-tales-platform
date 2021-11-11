import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import './MiniNav.css';

import { ReactComponent as ChatIcon } from '../../../resources/img/icons/chat.svg';
import { ReactComponent as QuotesIcon } from '../../../resources/img/icons/notebook.svg';
import { ReactComponent as WhyIcon } from '../../../resources/img/icons/lightbulb.svg';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../utils/data-processing/sanitize';

const MiniNav = () => {
  const { t } = useTranslation();
  return (
    <div className="mini-nav">
      <NavLink
        exact
        to="/safe-space"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <WhyIcon />
        <sub
          dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
            t('safeSpace.miniNavbar.why')
          )}
        ></sub>
      </NavLink>
      <NavLink
        exact
        to="/safe-space/quotes"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <QuotesIcon />
        <sub
          dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
            t('safeSpace.miniNavbar.microExperiences')
          )}
        ></sub>
      </NavLink>
      <NavLink
        exact
        to="/safe-space/chat"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <ChatIcon />
        <sub
          dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
            t('safeSpace.miniNavbar.ourSlack')
          )}
        ></sub>
      </NavLink>
    </div>
  );
};

export default MiniNav;
