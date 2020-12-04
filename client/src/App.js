import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

import Home from './components/layout/home/Home';
import ModernWorld from './components/layout/worlds/modern-world/ModernWorld';
import Imaginarium from './components/layout/worlds/imaginarium/Imaginarium';
import AncientWorld from './components/layout/worlds/ancient-world/AncientWorld';
import Article from './components/article/Article';
import Swipe from './components/elements/swipe/Swipe';

import Navbar from './components/navbar/Navbar';

const App = () => {
  // const isMobileSmall = useMediaQuery({ query: '(max-device-width: 320px)' });
  // const isMobile = useMediaQuery({ query: '(max-device-width: 568px)' });
  // const isTablet = useMediaQuery({ query: '(min-device-width: 568px)' });
  // const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' });

  return (
    <Provider store={store}>
      <Router>
        <section>
          <Switch>
            <Route path="/modern-world" component={ModernWorld}></Route>
            <Route path="/imaginarium" component={Imaginarium}></Route>
            <Route path="/ancient-world" component={AncientWorld}></Route>
            <Route path="/articles/:type/:slug" component={Article}></Route>
            <Route path="/swipe" component={Swipe}></Route>
            <Home />
          </Switch>
        </section>
        <Navbar />
      </Router>
    </Provider>
  );
};

export default App;
