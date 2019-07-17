import { combineReducers } from 'redux';
import IdReducer from './IdReducer.js';

import listReducer from './Reviews/listReducer.js';
import metaReducer from './Reviews/metaReducer.js';

const rootReducer = combineReducers({
  productId: IdReducer,
  reviewList: listReducer,
  metaInfo: metaReducer
});
export default rootReducer;
