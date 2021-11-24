import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { sanitize } from '../../../../../utils/data-processing/sanitize';
import { suggestQuote } from '../../../../../redux/actions/quote';
import CustomReCaptcha from '../../common/recaptcha/CustomReCaptcha';

const AddQuoteForm = ({ suggestQuote, tellResult }) => {

  const { t } = useTranslation();

  const initialForm = {
    quote: '',
    name: '',
  };
  const [formData, setFormData] = useState(initialForm);
  const [shouldReCaptchaDoCheck, setShouldReCaptchaDoCheck] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState(null);

  const { name, quote } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: sanitize(event.target.value),
    });
  };

  // 1. Ok, let's imagine we've just hit the form's submit button!
  const handleSubmit = (event) => {
    event.preventDefault();
    tellCaptchaComponentToExecuteCheck();
  };

  // 2. We tell the recaptcha component (who is our child) to check if we are a human
  const tellCaptchaComponentToExecuteCheck = () => {
    setShouldReCaptchaDoCheck(true);
  };

  // After the captcha component has done its check,
  // it sends the response token to us, and we store this value in state
  const changeReCaptchaTokenStateWithTokenFromChild = (token) => {
    setReCaptchaToken(token);
  };

  // When reCaptchaToken state changes, form data and token are sent to server
  // The isInitialMount trick prevents sending form data to server on component initial load, before
  // our user has completed the form. It comes from here: https://stackoverflow.com/a/55075818
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Send form to the server
      suggestQuote(formData, reCaptchaToken).then((response) => {
        tellResult(response);
      });
    }
  }, [reCaptchaToken]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label-for-quote" htmlFor="quote">
          {t('safeSpace.microExperiences.share.microExperience.label')}
          <textarea
            name="quote"
            value={quote}
            onChange={handleChange}
            placeholder={t('safeSpace.microExperiences.share.microExperience.placeholder')}
            required
          />
        </label>
        <label className="label-for-name" htmlFor="name">
          {t('safeSpace.microExperiences.share.name.label')}
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder={t('safeSpace.microExperiences.share.name.placeholder')}
          />
        </label>
        <input type="submit" value={t('common.buttons.share')} className="basic-button" />
        <CustomReCaptcha
          tellReCaptchaResult={changeReCaptchaTokenStateWithTokenFromChild}
          shouldIDoCheck={shouldReCaptchaDoCheck}
        />
      </form>
    </div>
  );
};

AddQuoteForm.propTypes = {
  suggestQuote: PropTypes.func.isRequired,
  tellResult: PropTypes.func.isRequired,
};

export default connect(null, { suggestQuote })(AddQuoteForm);
