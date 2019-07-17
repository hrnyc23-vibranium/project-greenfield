const GET_QUESTIONS = {
  type: 'GET_QUESTIONS',
  text: 'Get questions by product id',
};

const getQuestions = productid => {
  return {
    type: 'GET_QUESTIONS',
    payload: productid,
  };
};

export default getQuestions;
