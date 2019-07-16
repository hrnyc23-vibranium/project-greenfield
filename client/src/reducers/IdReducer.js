const setCurrentId = (state = 11, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_ID':
      return payload;
    default:
      return state;
  }
};

export default setCurrentId;
