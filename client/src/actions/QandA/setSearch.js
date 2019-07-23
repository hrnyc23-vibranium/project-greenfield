const setSearch = keyword => {
  return {
    type: 'SEARCH',
    payload: keyword,
  };
};
export default setSearch;
