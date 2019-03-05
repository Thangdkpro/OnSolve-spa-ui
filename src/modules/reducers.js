import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import authReducer from './login/login.reducer';
import homepageReducer from './homepage/homepage.reducer';
import detailReducer from './detail/detail.reducer';

export default combineReducers({
  auth: authReducer,
  routing: routerReducer,
  form: formReducer,
  homepage: homepageReducer,
  detail: detailReducer,
});
