import { combineReducers } from 'redux';
import IdReducer from './IdReducer.js';
import productReducer from './overview/productReducer.js';
import styleReducer from './overview/styleReducer.js';
import QuestionReducer from './QandA/QuestionReducer.js';
import AnswerReducer from './QandA/AnswerReducer.js';

const rootReducer = combineReducers({
  productId: IdReducer,
  product: productReducer,
  styles: styleReducer,
  questions: QuestionReducer,
  answers: AnswerReducer,
});

export default rootReducer;
