import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import './AddQuote.css';

import safeSpaceBackground from '../../../../resources/img/mocks/safe-space.jpg';
import FormPage from '../../../elements/form/common/form-page/FormPage';
import AddQuoteForm from '../../../elements/form/specific/add-quote/AddQuoteForm';

const AddQuote = () => {
  return (
    <FormPage backgroundImage={safeSpaceBackground}>
      <AddQuoteForm />
    </FormPage>
  );
};

export default AddQuote;
