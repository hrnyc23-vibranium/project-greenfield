import axios from 'axios';

// const GET_ANSWERS = {
//   type: 'GET_ANSWERS',
//   text: 'Get answers by question id',
// };

const getAnswers = questionId => async dispatch => {
  const res = await axios.get(`http://18.222.40.124/qa/${questionId}/answers`);
  dispatch({
    type: 'GET_ANSWERS',
    payload: res.data,
  });
};

export default getAnswers;
