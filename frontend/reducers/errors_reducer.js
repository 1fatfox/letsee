import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import productErrorsReducer from './products_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  products: productErrorsReducer
});
