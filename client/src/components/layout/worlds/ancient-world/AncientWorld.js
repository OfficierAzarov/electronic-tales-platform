import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setCurrentPath } from '../../../../actions/path';

const AncientWorld = ({ setCurrentPath, location: pathname }) => {
  useEffect(() => {
    setCurrentPath(pathname);
  }, []);

  return <div>Ancient world</div>;
};

export default connect(null, { setCurrentPath })(AncientWorld);
