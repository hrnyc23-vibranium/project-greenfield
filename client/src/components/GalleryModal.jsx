import React from 'react';
import { connect } from 'react-redux';
import { nextImage, prevImage } from '../actions/galleryActions';

//Material Componenets
import { ArrowBack, ArrowForward } from '@material-ui/icons';

const Gallery = ({ images, current, clickNext, clickPrev }) => {
  return (
    <div id="gallery">
      <ArrowBack
        className="gallerybutton prev"
        onClick={() => {
          clickPrev();
        }}>
        prev
      </ArrowBack>
      <div>
        <img src={images[current].url} />
      </div>
      <ArrowForward
        className="gallerybutton forward"
        onClick={() => {
          clickNext();
        }}>
        next
      </ArrowForward>
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
