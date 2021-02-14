import React, { useState, useEffect, useRef } from 'react';
import { sanitize } from '../../../../../utils/data-processing/sanitize';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import { suggestTLTA } from '../../../../../redux/actions/tooLateToAsk';
import CustomReCaptcha from '../../common/recaptcha/CustomReCaptcha';

const AddTLTAForm = ({ suggestTLTA, tellResult }) => {
  const initialForm = {
    question: '',
    simpleDefinition: '',
    analogy: '',
    realWorldExample: '',
    name: '',
  };

  const [iHaveAnswer, setIHaveAnswer] = useState(false);

  const [formData, setFormData] = useState(initialForm);
  const [shouldReCaptchaDoCheck, setShouldReCaptchaDoCheck] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState(null);

  const { question, simpleDefinition, analogy, realWorldExample, name } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: sanitize(event.target.value),
    });
  };

  const handleIHaveAnswerChange = () => {
    setIHaveAnswer(!iHaveAnswer);
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
      suggestTLTA(formData, reCaptchaToken).then((response) => {
        tellResult(response);
      });
    }
  }, [reCaptchaToken]);

  return (
    <div className="form-container">
      <h3 className="neon">Je me suis toujours demandé...</h3>
      <p>
        {' '}
        Toi aussi, tu as une question que tu n'oses plus poser parce que tu es censé·e déjà
        connaître la réponse&nbsp;?
        <br />
        <br />
        N'hésite plus et partage-la&nbsp;!
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          Ta question (obligatoire)&nbsp;:
          <textarea
            name="question"
            value={question}
            onChange={handleChange}
            placeholder="Écris ta question ici."
            required
          />
        </label>
        {/* For design, see : http://aaronshaf.github.io/react-toggle/ */}
        <label className="toggle-label">
          <span style={{ fontWeight: iHaveAnswer ? '400' : '700' }}>
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
          />
          <span style={{ fontWeight: iHaveAnswer ? '700' : '400' }}>
            Je veux proposer une réponse
          </span>
        </label>
        <div className={iHaveAnswer ? '' : 'optional-input-is-not-visible'}>
          <label htmlFor="simpleDefinition">
            Tu as une définition simple&nbsp;? <br />
            Super&nbsp;! Écris-la ici&nbsp;:
            <textarea
              name="simpleDefinition"
              value={simpleDefinition}
              onChange={handleChange}
              placeholder="Exemple&nbsp;: En fait, c'est juste une façon de..."
            />
          </label>
          <label htmlFor="analogy">
            Si tu as une analogie ou une métaphore, c'est par là&nbsp;:
            <textarea
              name="analogy"
              value={analogy}
              onChange={handleChange}
              placeholder="Exemple&nbsp;: C'est comme dans un restaurant où il y aurait..."
            />
          </label>
          <label htmlFor="realWorldExample">
            Un petit exemple concret, pour finir&nbsp;? Go&nbsp;:
            <textarea
              name="realWorldExample"
              value={realWorldExample}
              onChange={handleChange}
              placeholder='Exemple&nbsp;: Pour afficher "J&apos;aime Electronic Tales" sur mon écran, je peux taper...'
            />
          </label>
        </div>
        <label htmlFor="name">
          Ton petit nom&nbsp;?
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Captain Anonymouse"
            id="leave-a-name"
          />
        </label>
        <input type="submit" value="Partager" className="basic-button" />
        <CustomReCaptcha
          tellReCaptchaResult={changeReCaptchaTokenStateWithTokenFromChild}
          shouldIDoCheck={shouldReCaptchaDoCheck}
        />
      </form>
    </div>
  );
};

AddTLTAForm.propTypes = {
  suggestTLTA: PropTypes.func.isRequired,
  tellResult: PropTypes.func.isRequired,
};

export default connect(null, { suggestTLTA })(AddTLTAForm);
