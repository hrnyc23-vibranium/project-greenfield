export const buildGallery = ({ images, current }) => ({
  type: 'BUILD_GALLARY',
  payload: { images, current },
});
export const nextImage = currentIndex => ({
  type: 'NEXT_IMAGE',
  payload: currentIndex,
});
export const prevImage = currentIndex => ({
  type: 'PREV_IMAGE',
  payload: currentIndex,
});
