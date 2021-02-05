import React, { Fragment, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './CustomRecaptcha.css';

import { SITE_KEY } from '../../../../../env/reCaptcha';

const ReCaptcha = ({ tellReCaptchaResult, shouldIDoCheck }) => {
  const recaptchaRef = React.createRef();

  useEffect(() => {
    console.log(shouldIDoCheck);
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
      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={SITE_KEY} />
    </Fragment>
  );
};

export default ReCaptcha;
