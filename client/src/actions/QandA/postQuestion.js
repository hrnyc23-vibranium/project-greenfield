const POST_QUESTION = {
  type: 'POST_QUESTION',
  text: 'Post question by product id',
};

const postQuestion = question => {
  return {
    type: 'POST_QUESTION',
    payload: question,
  };
};

export default postQuestion;
