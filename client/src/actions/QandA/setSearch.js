export const setSearch = keyword => {
  return {
    type: 'SEARCH',
    payload: keyword,
  };
};
