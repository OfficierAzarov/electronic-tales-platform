import React, { useState } from 'react';
import { sanitizeWithExceptionsForVideos } from '../../../../../utils/data-processing/sanitize';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { addQuote } from '../../../../../redux/actions/quote';

const AddQuoteForm = ({ addQuote, tellResult }) => {
  const [formData, setFormData] = useState({
    name: '',
    quote: '',
  });

  const { name, quote } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: sanitizeWithExceptionsForVideos(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addQuote(formData).then(onSuccess);
  };

  const onSuccess = () => {
    tellResult('success');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label-for-quote" htmlFor="quote">
          Tu veux partager une expérience ? <br /> Le mic est à toi !
          <textarea
            name="quote"
            value={quote}
            onChange={handleChange}
            placeholder="Il était une fois..."
            required
          />
        </label>
        <label className="label-for-name" htmlFor="name">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Ton nom préferé"
          />
        </label>
        <input type="submit" value="Partager" className="basic-button" />
      </form>
    </div>
  );
};

export default connect(null, { addQuote })(AddQuoteForm);
