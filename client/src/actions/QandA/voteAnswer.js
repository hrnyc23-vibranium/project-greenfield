export const voteAnswer = answer => {
  return {
    type: 'VOTE_ANSWER',
    payload: answer,
  };
};
