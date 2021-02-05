import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import { sanitizeWithExceptionsForVideos } from '../../../../../utils/data-processing/sanitize';
import { suggestQuote } from '../../../../../redux/actions/quote';
import { SITE_KEY } from '../../../../../env/reCaptcha';

const AddQuoteForm = ({ suggestQuote, tellResult }) => {
  const initialForm = {
    quote: '',
    name: '',
  };
  const [formData, setFormData] = useState(initialForm);

  const { name, quote } = formData;

  const recaptchaRef = React.createRef();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: sanitizeWithExceptionsForVideos(event.target.value),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    console.log(token);
    if (token) {
      suggestQuote(formData)
        .then((response) => {
          tellResult(response);
        })
        .then(setFormData(initialForm));
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label-for-quote" htmlFor="quote">
          Tu as un micro-vécu à partager&nbsp;? Nous serons ravi·e·s de le lire et de le publier.
          <textarea
            name="quote"
            value={quote}
            onChange={handleChange}
            placeholder="Il était une fois..."
            required
          />
        </label>
        <label className="label-for-name" htmlFor="name">
          Ton pseudo&nbsp;?
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Captain Ann O'nymous"
          />
        </label>
        <input type="submit" value="Partager" className="basic-button" />
        <sub className="recaptcha-text">
          {' '}
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </sub>
        <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={SITE_KEY} />
      </form>
    </div>
  );
};

AddQuoteForm.propTypes = {
  suggestQuote: PropTypes.func.isRequired,
  tellResult: PropTypes.func.isRequired,
};

export default connect(null, { suggestQuote })(AddQuoteForm);
