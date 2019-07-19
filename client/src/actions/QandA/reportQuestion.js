export const reportQuestion = question => {
  return {
    type: 'REPORT_QUESTION',
    payload: question,
  };
};
