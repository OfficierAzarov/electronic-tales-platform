import React from 'react';

import FormPage from '../../form/common/form-page/FormPage';
import AddTLTAForm from '../../form/specific/add-too-late-to-ask-question/AddTLTAForm';

const SwipeAddQuestion = () => {
  return (
    // You can add a backgroundImage to FormPage as a prop if needed
    // ex :  <FormPage backgroundImage={nameOfYourImage}>
    <FormPage>
      <AddTLTAForm />
    </FormPage>
  );
};

export default SwipeAddQuestion;
