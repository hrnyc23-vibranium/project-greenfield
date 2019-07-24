import axios from 'axios';

const init = {
  product_id: null,
  body: null,
  name: null,
  email: null,
};

const QuestionReducer = (state = init, { type, payload }) => {
  switch (type) {
    case 'POST_QUESTION':
      const body = {
        body: payload.question,
        name: payload.name,
        email: payload.email,
      };
      axios
        .post(`http://18.222.40.124/qa/${payload.productId}`, body)
        .then(res => {
          return state;
        })
        .catch(err => {
          console.log('err:', err);
          return state;
        });

    default:
      return state;
  }
};
export default QuestionReducer;
