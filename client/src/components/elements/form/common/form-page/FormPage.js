import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './FormPage.css';

import FormWrapper from '../form-wrapper/FormWrapper';

const FormPage = ({ children, backgroundImage }) => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const history = useHistory();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleResultFromChild = (actionResult) => {
    if (actionResult === 'success') {
      notify("C'est dans la boîte 🥡 Merci !");
    } else {
      notify(
        "Oops, on dirait qu'il y a un grumeau dans les tuyaux ! On prévient les devs d'Electronic Tales tout de suite !"
      );
    }
  };

  const handleVisibilityChangeFromChild = (isVisibleFromChild) => {
    setIsFormVisible(isVisibleFromChild);
  };

  const notify = (resultMessage) =>
    toast.success(resultMessage, {
      position: 'top-center',
      autoClose: 4000,
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

  return (
    // <div id="form-page" style={{ 'background-image': backgroundImage }}>
    <div id="form-page" style={{ backgroundImage: 'url(' + backgroundImage + ')' }}>
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
  backgroundImage: PropTypes.string,
};

export default FormPage;
