import { combineReducers } from 'redux';
import category from './category';
import article from './article';
import page from './page';
import modal from './modal';

export default combineReducers({
  category,
  article,
  page,
  modal
});
