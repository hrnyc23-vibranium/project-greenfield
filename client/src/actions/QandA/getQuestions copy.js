const GET_QUESTIONS = {
  type: 'GET_QUESTIONS',
  text: 'Get questions by product id',
};

const getQuestions = questions => {
  return {
    type: 'GET_QUESTIONS',
    payload: questions,
  };
};

export default getQuestions;
