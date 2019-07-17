import { combineReducers } from 'redux';
import IdReducer from './IdReducer.js';
import productReducer from './overview/productReducer.js';
import styleReducer from './overview/styleReducer.js';

import listReducer from './Reviews/listReducer.js';
import metaReducer from './Reviews/metaReducer.js';

const rootReducer = combineReducers({
  productId: IdReducer,
  product: productReducer,
  styles: styleReducer,
  reviewList: listReducer,
  metaInfo: metaReducer
});

export default rootReducer;
