const REPORT_ANSWER = {
  type: 'REPORT_ANSWER',
  text: 'Report answer by product id',
};

const reportAnswer = answer => {
  return {
    type: 'REPORT_ANSWER',
    payload: answer,
  };
};

export default reportAnswer;
