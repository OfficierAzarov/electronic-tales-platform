import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setCurrentPath } from '../../../../actions/path';

const AncientWorld = () => {
  return <div className="full-height">Ancient world</div>;
};

export default AncientWorld;

// const AncientWorld = ({ setCurrentPath, location: pathname }) => {
//   useEffect(() => {
//     setCurrentPath(pathname);
//   }, []);

//   return <div className="full-height">Ancient world</div>;
// };

// export default connect(null, { setCurrentPath })(AncientWorld);
