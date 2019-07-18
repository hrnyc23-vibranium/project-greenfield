const POST_ANSWER = {
  type: 'POST_ANSWER',
  text: 'Post answer by product id',
};

const postAnswer = answer => {
  return {
    type: 'POST_ANSWER',
    payload: answer,
  };
};

export default postAnswer;
