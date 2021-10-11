import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

import ScrollToTop from './components/helpers/ScrollToTop';
import Navbar from './components/elements/navbar/Navbar';
import LanguageNavbar from './components/elements/navbar/language-switcher-navbar/LangagueNavbar';
import Routes from './components/routes/Routes';
import Home from './components/layout/home/Home';
import SecondaryNavbar from './components/elements/navbar/secondary-navbar/SecondaryNavbar';
import NotYet from './components/layout/not-yet/NotYet';

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' },
};

const App = () => {
  const { t, i18n } = useTranslation();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  const change = (lng) => {
    console.log('lang changed to ');
    // console.log('lang changed to ' + lng);
    // i18n.changeLanguage(lng);
  };

  return (
    <Provider store={store}>
      {isDesktopOrLaptop ? (
        <NotYet />
      ) : (
        // {/* <button onClick={() => console.log('contentId')}>test</button> */}
        // {/* {Object.keys(lngs).map((lng) => (
        //   <button key={lng} type="submit" onClick={() => change(lng)}>
        //   <button key={lng} onClick={() => console.log('bip')}>
        //     {lngs[lng].nativeName}
        //   </button>
        // ))} */}

        <Router>
          <LanguageNavbar />
          <SecondaryNavbar />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Routes} />
          </Switch>
          <Navbar />
        </Router>
      )}
    </Provider>
  );
};

export default App;
