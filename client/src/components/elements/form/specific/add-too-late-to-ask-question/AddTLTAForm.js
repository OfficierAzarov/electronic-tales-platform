import React, { useState, useEffect, useRef } from 'react';
import {
  generateSanitizedDangerouslySetInnerHtml,
  sanitize,
} from '../../../../../utils/data-processing/sanitize';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import { suggestTLTA } from '../../../../../redux/actions/tooLateToAsk';
import CustomReCaptcha from '../../common/recaptcha/CustomReCaptcha';

const AddTLTAForm = ({ suggestTLTA, tellResult }) => {
  const { t } = useTranslation();

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
      <h3 className="neon">{t('common.tooLateToAsks.suggestTooLateToAsk.title')}</h3>
      <p
        dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(
          t('common.tooLateToAsks.suggestTooLateToAsk.description')
        )}
      ></p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          {t('common.tooLateToAsks.suggestTooLateToAsk.question.label')}
          <textarea
            name="question"
            value={question}
            onChange={handleChange}
            placeholder={t('common.tooLateToAsks.suggestTooLateToAsk.question.placeholder')}
            required
          />
        </label>
        {/* For design, see : http://aaronshaf.github.io/react-toggle/ */}
        <label className="toggle-label">
          <span style={{ fontWeight: iHaveAnswer ? '400' : '700' }}>
            {t('common.tooLateToAsks.suggestTooLateToAsk.choice.iWantETToAnswer')}
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
            {t('common.tooLateToAsks.suggestTooLateToAsk.choice.iWantToSuggestAnAnswer')}
          </span>
        </label>
        <div className={iHaveAnswer ? '' : 'optional-input-is-not-visible'}>
          <label htmlFor="simpleDefinition">
            {t('common.tooLateToAsks.suggestTooLateToAsk.simpleDefinition.label')}
            <textarea
              name="simpleDefinition"
              value={simpleDefinition}
              onChange={handleChange}
              placeholder={t('common.tooLateToAsks.suggestTooLateToAsk.simpleDefinition.placeholder')}
            />
          </label>
          <label htmlFor="analogy">
            {t('common.tooLateToAsks.suggestTooLateToAsk.analogy.label')}
            <textarea
              name="analogy"
              value={analogy}
              onChange={handleChange}
              placeholder={t('common.tooLateToAsks.suggestTooLateToAsk.analogy.placeholder')}
            />
          </label>
          <label htmlFor="realWorldExample">
            {t('common.tooLateToAsks.suggestTooLateToAsk.realWorldExample.label')}
            <textarea
              name="realWorldExample"
              value={realWorldExample}
              onChange={handleChange}
              placeholder={t('common.tooLateToAsks.suggestTooLateToAsk.realWorldExample.placeholder')}
            />
          </label>
        </div>
        <label htmlFor="name">
          {t('common.tooLateToAsks.suggestTooLateToAsk.name.label')}
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder={t('common.tooLateToAsks.suggestTooLateToAsk.name.placeholder')}
            id="leave-a-name"
          />
        </label>
        <input type="submit" value={t('common.tooLateToAsks.suggestTooLateToAsk.buttons.share')} className="basic-button" />
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
