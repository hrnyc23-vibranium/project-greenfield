import { combineReducers } from 'redux';
import IdReducer from './IdReducer.js';
import productReducer from './overview/productReducer.js';
import styleReducer from './overview/styleReducer.js';

const rootReducer = combineReducers({
  productId: IdReducer,
  product: productReducer,
  styles: styleReducer,
});

export default rootReducer;
