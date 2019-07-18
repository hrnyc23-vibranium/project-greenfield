const GET_QUESTIONS = {
  type: 'GET_QUESTIONS',
  text: 'Get questions by product id',
};
import axios from 'axios';

export const getQuestions = productId => async dispatch => {
  const res = await axios.get(`http://18.222.40.124/qa/${productId}`);
  dispatch({
    type: 'GET_QUESTIONS',
    payload: res.data,
  });
};

//export default getQuestions;
