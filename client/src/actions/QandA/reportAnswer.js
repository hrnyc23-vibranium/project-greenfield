export const reportAnswer = answer => {
  return {
    type: 'REPORT_ANSWER',
    payload: answer,
  };
};
