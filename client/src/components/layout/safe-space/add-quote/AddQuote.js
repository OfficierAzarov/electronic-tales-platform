import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './AddQuote.css';

import Add from '../../../elements/add/Add';

const AddQuote = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const notify = (resultMessage) =>
    toast.success(resultMessage, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => history.goBack(),
    });

  const handleResultFromChild = (actionResult) => {
    if (actionResult === 'success') {
    }
    notify("C'est dans la boîte 🥡 Merci !");
  };

  return (
    <div id="safe-space-add-quote">
      <div>
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
        <Add tellResult={handleResultFromChild} />
      </div>
    </div>
  );
};

export default AddQuote;
