// import { GET_CATEGORIES, CATEGORIES_ERROR } from './types';
// import api from '../../utils/urls/api';

// export const getCategories = () => async (dispatch) => {
//   try {
//     const res = await api.get('/categories');

//     dispatch({
//       type: GET_CATEGORIES,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: CATEGORIES_ERROR,
//       payload: { msg: error.response.statusText, status: error.response.status },
//     });
//   }
// };
