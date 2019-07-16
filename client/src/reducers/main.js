import { combineReducers } from 'redux';
import IdReducer from './IdReducer.js';

const rootReducer = combineReducers({
  productId: IdReducer
});
export default rootReducer;
