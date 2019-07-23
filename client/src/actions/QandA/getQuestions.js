import axios from 'axios';

const filterAnswers = (questions, searchTerm) => {
  const result = [];
  questions.map(question => {
    //create a question copy without answers
    let questionObj = Object.assign({}, question, { answers: {} });
    let match = false;
    //search term for each answer
    let answerkeys = Object.keys(question.answers);
    for (let keys in answerkeys) {
      if (question.answers[answerkeys[keys]].body.indexOf(searchTerm) > 0) {
        match = true;
        questionObj.answers[answerkeys[keys]] =
          question.answers[answerkeys[keys]];
      }
    }
    if (match == true) {
      result.push(questionObj);
    }
  });
  return result;
};

export const getQuestions = (
  productId,
  page = 1,
  count = 4,
  searchTerm = 'sh'
) => async dispatch => {
  const res = await axios.get(
    `http://18.222.40.124/qa/${productId}?page=${page}&count=${count}`
  );
  let questions = res.data.results;
  if (searchTerm.length >= 3) {
    questions = filterAnswers(questions, searchTerm);
  }
  dispatch({
    type: 'GET_QUESTIONS',
    payload: { results: questions },
  });
};
