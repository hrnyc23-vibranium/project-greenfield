import axios from 'axios';
export const voteAnswer = answerID => {
  return async dispatch => {
    const res = await axios.put(
      `http://18.222.40.124/qa/answer/${answerID}/helpful`
    );

    dispatch({
      type: 'VOTE_ANSWER',
      payload: answer,
    });
  };
};
