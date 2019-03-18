import { combineReducers } from 'redux';
import homePage from './homePage';
import login from './login';

const rootReducer = combineReducers({
  homePage,
  login
});
export default rootReducer