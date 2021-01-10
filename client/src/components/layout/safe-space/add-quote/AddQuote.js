import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './AddQuote.css';

import FormPage from '../../../elements/form/form-page/FormPage';
import AddQuoteForm from '../../../elements/form/add-quote/AddQuoteForm';

const AddQuote = () => {
  return (
    <FormPage>
      <AddQuoteForm />
    </FormPage>

    // <div id="safe-space-add-quote">
    //   <ToastContainer
    //     position="top-center"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //   />
    //   <FormWrapper isVisible={isFormVisible} tellVisibilityChange={handleVisibilityChangeFromChild}>
    //     <AddQuoteForm tellResult={handleResultFromChild} />
    //   </FormWrapper>
    // </div>
  );
};

export default AddQuote;
