export const postAnswer = answer => {
  return {
    type: 'POST_ANSWER',
    payload: answer,
  };
};
