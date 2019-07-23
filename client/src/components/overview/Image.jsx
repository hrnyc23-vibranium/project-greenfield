import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  slide: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
    cursor: 'zoom-in',
  },
  slideZoomed: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
    cursor: 'crosshair',
    transform: 'scale(2.5)',
  },
}));

const Image = ({ image, clicked }) => {
  const classes = useStyles();

  const [position, setPosition] = useState({ backgroundPosition: '0% 0%' });

  const handleMouseMove = event => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setPosition({ backgroundPosition: `${x}% ${y}%` });
  };

  const [zoom, setZoom] = useState(classes.slide);

  const renderClick = () => {
    if (clicked === false) {
      return (
        <div
          className={zoom}
          style={styles}
          onMouseMove={handleMouseMove}
          onMouseOver={() => {
            setZoom(classes.slideZoomed);
          }}
          onMouseOut={() => {
            setZoom(classes.slide);
          }}
        />
      );
    } else {
      return <div className={zoom} style={styles} />;
    }
  };
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: position.backgroundPosition,
  };

  return <Fragment>{renderClick()}</Fragment>;
};

export default Image;
