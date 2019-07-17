const REPORT_QUESTION = {
  type: 'REPORT_QUESTION',
  text: 'Report question by product id',
};

const reportQuestion = question => {
  return {
    type: 'REPORT_QUESTION',
    payload: question,
  };
};

export default reportQuestion;
