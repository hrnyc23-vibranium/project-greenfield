const GET_ANSWERS = {
  type: 'GET_ANSWERS',
  text: 'Get answers by question id',
};

const getAnswers = questionid => {
  return {
    type: 'GET_ANSWERS',
    payload: questionid,
  };
};

export default getAnswers;
