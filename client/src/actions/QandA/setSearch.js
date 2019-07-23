export default (setSearch = keyword => {
  return {
    type: 'SEARCH',
    payload: keyword,
  };
});
