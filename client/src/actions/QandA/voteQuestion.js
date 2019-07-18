const VOTE_QUESTION = {
  type: 'VOTE_QUESTION',
  text: 'Vote question by product id',
};

const voteQuestion = question => {
  return {
    type: 'VOTE_QUESTION',
    payload: question,
  };
};

export default voteQuestion;
