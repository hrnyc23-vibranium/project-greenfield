import Axios from 'axios';

//url for get questions and post question - pass in a product id
const urlByProduct = 'http://18.222.40.124/qa/';

//json format for posting question
const questionObject = {
  body: 'test question to product 1',
  name: 'Xiao',
  email: 'xiaoxie.ny@gmail.com',
};
//url for vote and report question - pass in a question id and action
const urlByQuestion = 'http://18.222.40.124/qa/question/';
//Mark Question as Helpful (by qustion id)
//PUT http://18.222.40.124/qa/question/55/helpful
//Report Question (by question id)
//PUT http://18.222.40.124/qa/question/56/report

const QuestionReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_QUESTIONS':
      console.log(payload);
      //for get question, payload is the productid
      Axios.get(urlByProduct + payload)
        .then(response => {
          console.log(response);
          return Object.assign(state, { questions: response.data });
        })
        .catch(err => {
          console.log(err);
          return state;
        });
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
