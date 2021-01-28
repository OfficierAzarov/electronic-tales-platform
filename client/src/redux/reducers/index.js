import { combineReducers } from 'redux';
import category from './category';
import article from './article';
import page from './page';
import modal from './modal';
import question from './tooLateToAsk';
import quote from './quote';

export default combineReducers({
  category,
  article,
  page,
  modal,
  question,
  quote,
});
