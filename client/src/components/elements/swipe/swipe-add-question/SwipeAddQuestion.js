import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormPage from '../../form/form-page/FormPage';
import AddTLTAQuestion from '../../form/add-too-late-to-ask-question/AddTLTAForm';

const SwipeAddQuestion = () => {
  // const [isFormVisible, setIsFormVisible] = useState(true);

  // const history = useHistory();

  // const handleResultFromChild = (actionResult) => {
  //   if (actionResult === 'success') {
  //     notify("C'est dans la boîte 🥡 Merci !");
  //   } else {
  //     notify(
  //       "Oops, on dirait qu'il y a un grumeau dans les tuyaux ! On prévient les devs d'Electronic Tales tout de suite !"
  //     );
  //   }
  // };

  // const handleVisibilityChangeFromChild = (isVisibleFromChild) => {
  //   setIsFormVisible(isVisibleFromChild);
  // };

  // const notify = (resultMessage) =>
  //   toast.success(resultMessage, {
  //     position: 'top-center',
  //     autoClose: 4000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     onClose: () => {
  //       setIsFormVisible(false);
  //       setTimeout(() => history.goBack(), 600);
  //     },
  //   });

  return (
    <FormPage>
      <AddTLTAQuestion />
    </FormPage>
  );
  //   <div>
  //     <ToastContainer
  //       position="top-center"
  //       autoClose={5000}
  //       hideProgressBar={false}
  //       newestOnTop={false}
  //       closeOnClick
  //       rtl={false}
  //       pauseOnFocusLoss
  //       draggable
  //       pauseOnHover
  //     />
  //     <FormWrapper isVisible={isFormVisible} tellVisibilityChange={handleVisibilityChangeFromChild}>
  //       <AddTLTAQuestion tellResult={handleResultFromChild} />
  //     </FormWrapper>
  //   </div>
  // );
};

export default SwipeAddQuestion;
