import React from 'react';
import Fade from 'react-reveal/Fade';
import Emoji from 'a11y-react-emoji';

import './AncientWorld.css';

import mamieCobol from '../../../../resources/img/illustrations/mcsorrycut.png';

const AncientWorld = () => {
  return (
    <Fade duration={1500}>
      <div id="ancient-world" className="world-page container">
        <div className="line-title-wrapper world-title-wrapper">
          <h2 className="world-title">Ancient world</h2>
        </div>
        <div id="warning-wrapper">
          <div class="warning">
            Ce monde est encore en fabrication <Emoji symbol="😅" label="work in progress" />
          </div>
          <div class="warning">
            Pour apprendre les rouages des machines avec mamie Cobol (mais qui est-ce&nbsp;?
            suspense&nbsp;!), repasse un peu plus tard.
          </div>
        </div>

        <img src={mamieCobol} alt="" />
      </div>
    </Fade>
  );
};

export default AncientWorld;
