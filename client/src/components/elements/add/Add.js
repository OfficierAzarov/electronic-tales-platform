import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { sanitizeWithExceptionsForVideos } from '../../../utils/data-processing/sanitize';
import { addQuote } from '../../../redux/actions/quote';

import './Add.css';

const Add = ({ addQuote }) => {
  const history = useHistory();

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
    addQuote(formData);
    // TO DO : add a toaster or something to tell user their quote has been sent
    history.goBack();
  };

  return (
    <div id="add">
      <form onSubmit={handleSubmit}>
        <label id="label-for-quote" htmlFor="quote">
          Tu veux partager une expérience ? <br /> Le mic est à toi !
          <textarea
            name="quote"
            value={quote}
            onChange={handleChange}
            placeholder="Il était une fois..."
            required
          />
        </label>
        <label id="label-for-name" htmlFor="name">
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

Add.propTypes = {
  addQuote: PropTypes.func.isRequired,
};

export default connect(null, { addQuote })(Add);
