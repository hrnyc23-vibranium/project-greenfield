import { object } from 'prop-types';

const init = {
  product_id: null,
  results: [],
};

const QuestionReducer = (state = init, { type, payload }) => {
  switch (type) {
    case 'GET_QUESTIONS':
      return Object.assign({}, state, payload);
    case 'POST_QUESTION':
      return payload;
    case 'VOTE_QUESTION':
      return payload;
    case 'REPORT_QUESTION':
      return payload;
    default:
      return state;
  }
};
export default QuestionReducer;
