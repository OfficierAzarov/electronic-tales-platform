import React from 'react';

import safeSpaceBackground from '../../../../resources/img/mocks/safe-space.jpg';
import FormPage from '../../form/common/form-page/FormPage';
import AddTLTAQuestion from '../../form/specific/add-too-late-to-ask-question/AddTLTAForm';

const SwipeAddQuestion = () => {
  return (
    <FormPage backgroundImage={safeSpaceBackground}>
      <AddTLTAQuestion />
    </FormPage>
  );
};

export default SwipeAddQuestion;
