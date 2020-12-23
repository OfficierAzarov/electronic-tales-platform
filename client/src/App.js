import React, { Fragment } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

import Navbar from './components/elements/navbar/Navbar';
import Routes from './components/routes/Routes';
import Home from './components/layout/home/Home';

const App = () => {
  // const isMobileSmall = useMediaQuery({ query: '(max-device-width: 320px)' });
  // const isMobile = useMediaQuery({ query: '(max-device-width: 568px)' });
  // const isTablet = useMediaQuery({ query: '(min-device-width: 568px)' });
  // const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Routes} />
          </Switch>
          <Navbar />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
