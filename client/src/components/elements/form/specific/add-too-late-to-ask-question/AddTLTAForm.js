import React, { useState } from 'react';
import { sanitizeWithExceptionsForVideos } from '../../../../../utils/data-processing/sanitize';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import Emoji from 'a11y-react-emoji';

const AddTLTAQuestion = ({ tellResult }) => {
  const [formData, setFormData] = useState({
    name: '',
    question: '',
    answer: '',
  });

  const [iHaveAnswer, setIHaveAnswer] = useState(false);

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

  const handleIHaveAnswerChange = () => {
    setIHaveAnswer(!iHaveAnswer);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          Un too late to ask à partager&nbsp;?
          <textarea
            name="question"
            value={question}
            onChange={handleChange}
            placeholder="Je me suis toujours demandé·e..."
            required
          />
        </label>
        {/* For design, see : http://aaronshaf.github.io/react-toggle/ */}
        <label className="toggle-label">
          <span style={{ fontWeight: iHaveAnswer ? '300' : '700' }}>
            Je veux que la team d'Electronic Tales réponde
          </span>
          <Toggle
            defaultChecked={iHaveAnswer}
            className="custom-toggle"
            onChange={handleIHaveAnswerChange}
            icons={{
              checked: '',
              unchecked: '',
            }}
            // icons are ugly positioned, so I leave it this way for now
            // icons={{
            //   checked: <Emoji symbol="🕑" label="clock" />,
            //   unchecked: <Emoji symbol="🕑" label="clock" />,
            // }}
          />
          <span style={{ fontWeight: iHaveAnswer ? '700' : '300' }}>
            Je veux proposer une réponse
          </span>
        </label>
        <label htmlFor="answer" className={iHaveAnswer ? '' : 'optional-input-is-not-visible'}>
          <textarea
            name="answer"
            value={answer}
            onChange={handleChange}
            placeholder="En fait, c'est simple ! C'est juste..."
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

AddTLTAQuestion.propTypes = {
  tellResult: PropTypes.func.isRequired,
};

export default connect(null)(AddTLTAQuestion);
