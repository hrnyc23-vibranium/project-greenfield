import axios from "axios";

export const getAnswers = questionId => async dispatch => {
  const res = await axios.get(`http://34.201.38.46/qa/${questionId}/answers`);
  dispatch({
    type: "GET_ANSWERS",
    payload: res.data
  });
};
