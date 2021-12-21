import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import './FormPage.css';

import FormWrapper from '../form-wrapper/FormWrapper';

const FormPage = ({ children }) => {
  const { t } = useTranslation();

  const [isFormVisible, setIsFormVisible] = useState(true);

  const history = useHistory();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleResultFromChild = (actionResult) => {
    if (actionResult === 'success') {
      notifySuccess(t('common.tooLateToAsks.suggestTooLateToAsk.notifications.success'));
    } else {
      notifyFailure(t('common.tooLateToAsks.suggestTooLateToAsk.notifications.failure'));
    }
  };

  const handleVisibilityChangeFromChild = (isVisibleFromChild) => {
    setIsFormVisible(isVisibleFromChild);
  };

  const notifySuccess = (resultMessage) =>
    toast.success(resultMessage, {
      position: 'top-center',
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => {
        setIsFormVisible(false);
        setTimeout(() => history.goBack(), 600);
      },
    });

  const notifyFailure = (resultMessage) =>
    toast.warn(resultMessage, {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => {
        setIsFormVisible(false);
        setTimeout(() => history.goBack(), 600);
      },
    });

  return (
    <div id="form-page">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <FormWrapper isVisible={isFormVisible} tellVisibilityChange={handleVisibilityChangeFromChild}>
        {React.cloneElement(children, { tellResult: handleResultFromChild })}
      </FormWrapper>
    </div>
  );
};

FormPage.propTypes = {
  children: PropTypes.element,
};

export default FormPage;
