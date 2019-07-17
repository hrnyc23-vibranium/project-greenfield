const VOTE_ANSWER = {
  type: 'VOTE_ANSWER',
  text: 'Vote answer by product id',
};

const voteAnswer = answer => {
  return {
    type: 'VOTE_ANSWER',
    payload: answer,
  };
};

export default voteAnswer;
