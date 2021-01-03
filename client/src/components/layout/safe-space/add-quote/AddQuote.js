import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './AddQuote.css';

import Add from '../../../elements/add/Add';

const AddQuote = () => {
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
        "Oops, il y a un grumeau dans les tuyaux ! On prévient les devs d'Electronic Tales tout de suite !"
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
        <Add
          isVisible={isFormVisible}
          tellResult={handleResultFromChild}
          tellVisibilityChange={handleVisibilityChangeFromChild}
        />
      </div>
    </div>
  );
};

export default AddQuote;
