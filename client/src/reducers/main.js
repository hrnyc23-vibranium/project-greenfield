import { combineReducers } from 'redux';
import IdReducer from './IdReducer.js';

import listReducer from './Reviews/listReducer.js';
const rootReducer = combineReducers({
  productId: IdReducer,
  reviewList: listReducer
});
export default rootReducer;
