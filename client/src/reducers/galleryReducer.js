const galleryReducer = (
  state = { images: [], current: 0 },
  { type, payload }
) => {
  switch (type) {
    case 'BUILD_GALLARY':
      return payload;
    case 'NEXT_IMAGE':
      let next = state.current;
      if (state.current < state.images.length - 1) {
        next++;
      } else {
        next = 0;
      }
      return Object.assign({}, state, { current: next });
    case 'PREV_IMAGE':
      let prev = state.current;
      if (state.current > 0) {
        prev--;
      } else {
        prev = state.images.length - 1;
      }
      return Object.assign({}, state, { current: prev });
    default:
      return {};
  }
};
export default galleryReducer;
