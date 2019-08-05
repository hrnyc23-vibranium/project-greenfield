import axios from "axios";
export const voteAnswer = answerID => {
  return async dispatch => {
    const res = await axios.put(
      `http://34.201.38.46/qa/answer/${answerID}/helpful`
    );

    dispatch({
      type: "VOTE_ANSWER",
      payload: answer
    });
  };
};
