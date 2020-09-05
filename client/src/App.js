import React, { Fragment, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Home from './components/layout/home/Home';
import Navbar from './components/layout/navbar/Navbar';
import AncientWorld from './components/layout/worlds/ancient-world/AncientWorld';
import ModernWorld from './components/layout/worlds/modern-world/ModernWorld';
import Imaginarium from './components/layout/worlds/imaginarium/Imaginarium';

const App = () => {
  const isMobileSmall = useMediaQuery({ query: '(max-device-width: 320px)' });
  const isMobile = useMediaQuery({ query: '(max-device-width: 568px)' });
  const isTablet = useMediaQuery({ query: '(min-device-width: 568px)' });
  const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' });

  return (
    <Provider store={store}>
      <section id="main">
        <Home />
        <Element id="modern-world" className="full-height">
          <ModernWorld />
        </Element>
        <Element id="imaginarium" className="full-height">
          <Imaginarium />
        </Element>
        <Element id="ancient-world" className="full-height">
          <AncientWorld />
        </Element>
      </section>
      <Navbar />
    </Provider>
  );
};

export default App;
