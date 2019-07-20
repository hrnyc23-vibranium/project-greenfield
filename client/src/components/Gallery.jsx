import React from 'react';
import { connect } from 'react-redux';
import { nextImage, prevImage } from '../actions/galleryActions';

const Gallery = ({ images, current, clickNext, clickPrev }) => {
  console.log(images);
  return (
    <div id="gallery">
      <button
        id="prev"
        onClick={() => {
          clickPrev();
        }}>
        prev
      </button>
      <div>
        <img src={images[current].url} />
      </div>
      <button
        id="next"
        onClick={() => {
          clickNext();
        }}>
        next
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    images: state.gallery.images,
    current: state.gallery.current,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickNext: () => {
      dispatch(nextImage());
    },
    clickPrev: () => {
      dispatch(prevImage());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
