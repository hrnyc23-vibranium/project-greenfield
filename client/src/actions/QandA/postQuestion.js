export const postQuestion = question => {
  return {
    type: 'POST_QUESTION',
    payload: question,
  };
};
