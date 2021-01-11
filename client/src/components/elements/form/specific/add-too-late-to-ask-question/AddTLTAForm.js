import React, { useState } from 'react';
import { sanitizeWithExceptionsForVideos } from '../../../../../utils/data-processing/sanitize';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const AddTLTAQuestion = ({ tellResult }) => {
  const [formData, setFormData] = useState({
    name: '',
    question: '',
    answer: '',
  });

  const { name, question, answer } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: sanitizeWithExceptionsForVideos(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TO DO : add redux
    // addQuote(formData).then(onSucces);
    onSuccess();
  };

  const onSuccess = () => {
    tellResult('success');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label-for-quote" htmlFor="question">
          Tu as un too late to ask à partager&nbsp;?
          <textarea
            name="question"
            value={question}
            onChange={handleChange}
            placeholder="Je me suis toujours demandé·e..."
            required
          />
        </label>
        <label className="label-for-quote" htmlFor="answer">
          Tu as un too late to ask à partager ?
          <textarea
            name="answer"
            value={answer}
            onChange={handleChange}
            placeholder="Je me suis toujours demandé·e..."
            required
          />
        </label>
        <label htmlFor="name">
          Ton nom ?
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

export default connect(null)(AddTLTAQuestion);
