import React from 'react';
import Emoji from 'a11y-react-emoji';

import './NotYet.css';

import logo from '../../../resources/img/logo-transparent.png';
import logoSmall from '../../../resources/img/logo-transparent-350.png';
import {
  ELECTRONIC_TALES_PRESENTS,
  SLACK,
} from '../../../dictionnary/externalElectronicTalesLinks';
import oldCellVideo from '../../../resources/img/illustrations/old-cell.mp4';

const NotYet = () => {
  return (
    <div id="not-yet">
      <img
        src={logo}
        srcSet={`${logoSmall} 350w, ${logo} 500w`}
        id="logo"
        loading="auto"
        alt="electronic Tales logo"
      />
      <div id="content">
        <p>
          Hey&nbsp;!
          <br />
          <br />
          La plateforme Electronic Tales est accessible uniquement en version mobile pour le moment.
          <br />
          <br />
          Nous t'invitons à utiliser ton téléphone (ou l'
          <a
            href="https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode"
            target="_blank"
            rel="noopener noreferrer"
          >
            inspecteur de ton navigateur
          </a>
          , toi-même tu sais) pour commencer à explorer notre manoir.
          <br />
          <br />
          Tu peux aussi faire un tour sur{' '}
          <a href={ELECTRONIC_TALES_PRESENTS.BASE}>
            notre site de présentation <Emoji symbol="🍿" label="pop corn" />
          </a>
          , rejoindre le{' '}
          <a href={SLACK}>
            Slack de la communauté Electronic Tales
            <Emoji symbol="🌈" label="rainbow" />
            <Emoji symbol="💕" label="love" />
            <Emoji symbol="💾" label="floppy disk" />{' '}
          </a>{' '}
          ou <a href="mailto:contact@electronictales.io">nous écrire</a>.
        </p>
        <video autoPlay loop muted src={oldCellVideo} className="border-shadow-with-border"></video>
      </div>
    </div>
  );
};

NotYet.propTypes = {};

export default NotYet;
