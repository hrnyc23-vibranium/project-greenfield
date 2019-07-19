import axios from 'axios';

export const getAnswers = questionId => async dispatch => {
  const res = await axios.get(`http://18.222.40.124/qa/${questionId}/answers`);
  dispatch({
    type: 'GET_ANSWERS',
    payload: res.data,
  });
};
