import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { sanitizeWithExceptionsForVideos } from '../../../utils/data-processing/sanitize';
import { addQuote } from '../../../redux/actions/quote';

import './Add.css';

import { ReactComponent as GoBack } from '../../../resources/img/icons/left-arrow.svg';

const Add = ({ addQuote, tellResult, isVisible }) => {
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
    addQuote(formData).then(onSucces);
  };

  const onSucces = () => {
    tellResult('success');
  };

  return (
    <div id="add-container">
      <Animated
        animationIn="bounceInLeft"
        animationOut="bounceOutLeft"
        animationInDelay={200}
        animationInDuration={600}
        animationOutDelay={300}
        isVisible={isVisible}
        className="flex-start"
      >
        <div id="actions-container">
          <div id="go-back" onClick={() => history.goBack()}>
            <GoBack />
          </div>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInLeft"
        animationOut="bounceOutLeft"
        animationInDuration={600}
        animationInDelay={0}
        isVisible={isVisible}
        className="flex"
      >
        <div id="add-form-container">
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
      </Animated>
    </div>
  );
};

Add.propTypes = {
  addQuote: PropTypes.func.isRequired,
};

export default connect(null, { addQuote })(Add);
