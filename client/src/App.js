import React, { Fragment, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { setCurrentPath } from './actions/path';

import MainDisplay from './components/main-display/MainDisplay';

import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(setCurrentPath('/'));
  }, []);

  return (
    <Provider store={store}>
      <MainDisplay />
    </Provider>
  );
};

export default App;

// import React, { Fragment, useRef, useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';

// // Redux
// import { Provider } from 'react-redux';
// import store from './store';

// import './App.css';
// import Home from './components/layout/home/Home';
// import Navbar from './components/layout/navbar/Navbar';
// import AncientWorld from './components/layout/worlds/ancient-world/AncientWorld';
// import ModernWorld from './components/layout/worlds/modern-world/ModernWorld';
// import Imaginarium from './components/layout/worlds/imaginarium/Imaginarium';

// const App = () => {

//   useEffect(() => {
//     console.log(shownComponent);
//   }, [shownComponent]);

//   // const ref = useRef(null);

//   // window.scrollTo(0, ref.current);

//   const isMobileSmall = useMediaQuery({ query: '(max-device-width: 320px)' });
//   const isMobile = useMediaQuery({ query: '(max-device-width: 568px)' });
//   const isTablet = useMediaQuery({ query: '(min-device-width: 568px)' });
//   const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' });

//   return (
//     <Provider store={store}>
//       <Fragment>
//         <section id="container">
//           <Home />
//           <ModernWorld />
//           <Imaginarium />
//           <AncientWorld />
//           <Navbar />
//         </section>
//       </Fragment>
//     </Provider>
//   );
// };

// export default App;
