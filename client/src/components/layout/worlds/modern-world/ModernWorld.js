import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setCurrentPath } from '../../../../actions/path';

const ModernWorld = ({ setCurrentPath, location: pathname }) => {
  useEffect(() => {
    setCurrentPath(pathname);
  }, []);

  return <div className="full-height">Modern world</div>;
};

export default connect(null, { setCurrentPath })(ModernWorld);
