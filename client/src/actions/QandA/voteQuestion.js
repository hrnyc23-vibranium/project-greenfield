export const voteQuestion = question => {
  return {
    type: 'VOTE_QUESTION',
    payload: question,
  };
};
