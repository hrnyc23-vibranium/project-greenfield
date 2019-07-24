const SearchReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'SEARCH':
      return payload;
    default:
      return state;
  }
};
export default SearchReducer;
