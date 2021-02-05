import React, { Fragment, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './CustomRecaptcha.css';

const ReCaptcha = ({ tellReCaptchaResult, shouldIDoCheck }) => {
  const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const recaptchaRef = React.createRef();

  useEffect(() => {
    if (shouldIDoCheck) {
      doReCaptchaCheck();
    }
  }, [shouldIDoCheck]);

  const doReCaptchaCheck = async () => {
    const responseToken = await recaptchaRef.current.executeAsync();
    tellReCaptchaResult(responseToken);
  };

  return (
    <Fragment>
      <sub className="recaptcha-text">
        {' '}
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </sub>
      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={RECAPTCHA_SITE_KEY} />
    </Fragment>
  );
};

export default ReCaptcha;
