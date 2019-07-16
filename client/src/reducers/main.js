import { combineReducers } from 'redux';
import IdReducer from './IdReducer.js';
var rootReducer = combineReducers({
  productId: IdReducer
});
export default rootReducer;
