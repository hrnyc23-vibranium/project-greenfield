import axios from 'axios';

export const getQuestions = (
  productId,
  page = 1,
  count = 4
) => async dispatch => {
  const res = await axios.get(
    `http://18.222.40.124/qa/${productId}?page=${page}&count=${count}`
  );
  dispatch({
    type: 'GET_QUESTIONS',
    payload: res.data,
  });
};

//export default getQuestions;
