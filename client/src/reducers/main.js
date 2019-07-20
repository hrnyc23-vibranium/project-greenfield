import { combineReducers } from 'redux';
import IdReducer from './IdReducer.js';
import productReducer from './overview/productReducer.js';
import styleReducer from './overview/styleReducer.js';
import questionReducer from './QandA/QuestionReducer.js';
import answerReducer from './QandA/AnswerReducer.js';

import listReducer from './Reviews/listReducer.js';
import metaReducer from './Reviews/metaReducer.js';
import openReducer from './Reviews/openReducer.js';
import reviewFormReducer from './Reviews/reviewFormReducer.js';

const rootReducer = combineReducers({
  productId: IdReducer,
  product: productReducer,
  styles: styleReducer,
  questions: questionReducer,
  answers: answerReducer,
  reviewList: listReducer,
  metaInfo: metaReducer,
  open: openReducer,
  reviewForm: reviewFormReducer
});

export default rootReducer;
