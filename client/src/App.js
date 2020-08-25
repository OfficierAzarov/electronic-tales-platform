import React, { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';

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
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ancient-world" component={AncientWorld} />
            <Route exact path="/modern-world" component={ModernWorld} />
            <Route exact path="/imaginarium" component={Imaginarium} />
          </Switch>
          <Navbar />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
