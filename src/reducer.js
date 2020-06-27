import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppContainter from './index';
import companyList from './Company/reducer'

const navReducer = createNavigationReducer(AppContainter);

export default combineReducers({
  nav: navReducer,
  companyList
});
