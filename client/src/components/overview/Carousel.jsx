import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, CircularProgress } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import BackArrow from '@material-ui/icons/ArrowBack';
import NextArrow from '@material-ui/icons/ArrowForward';
import ZoomIcon from '@material-ui/icons/Fullscreen';
// React Components
import Image from './Image.jsx';
import Thumbnails from './Thumbnails.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '99%',
    height: '75vh',
    backgroundColor: grey[200],
  },
  slider: {
    position: 'relative',
    margin: '0 auto',
    height: 'auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  sliderWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  arrow: {
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextArrow: {
    position: 'absolute',
    top: '50%',
    right: 25,
    zIndex: 999,
  },
  backArrow: {
    position: 'absolute',
    top: '50%',
    left: 25,
    zIndex: 999,
  },
  zoomIcon: {
    position: 'relative',
    width: 24,
    height: 24,
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  progress: {
    margin: theme.spacing(1),
  },
}));

const Carousel = props => {
  const classes = useStyles();

  const [images, setImages] = useState();

  useEffect(() => {
    if (props.styles.results) {
      setImages(props.styles.results[props.index].photos);
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const [translateValue, setTranslateValue] = useState(0);

  const [slideWidth, setSlideWidth] = useState(750);
  const [sliderWidth, setSliderWidth] = useState({ width: 750 });

  const goToPreviousSlide = () => {
    if (currentIndex === 0) {
      return;
    }

    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + slideWidth);
  };

  const goToNextSlide = () => {
    if (images) {
      if (currentIndex === images.length - 1) {
        return setCurrentIndex(0), setTranslateValue(0);
      }
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth);
  };

  const [click, setClick] = useState(true);

  const [imgColumns, setImgColumns] = useState(8);
  const [styleColumns, setStyleColumns] = useState(4);

  const handleThumbnailClick = index => {
    setTranslateValue(index * -slideWidth);
  };

  return (
    <Box className={classes.root}>
      <Thumbnails
        thumbnails={images}
        clicked={click}
        translate={translateValue}
        handleThumbnailClick={handleThumbnailClick}
      />
      <Box className={classes.slider} style={sliderWidth}>
        <IconButton
          className={clsx(classes.arrow, classes.backArrow)}
          onClick={goToPreviousSlide}>
          <BackArrow />
        </IconButton>
        <Box
          className={classes.sliderWrapper}
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.5s',
          }}
          onClick={() => {
            click
              ? (setImgColumns(8), setStyleColumns(4))
              : (setImgColumns(12), setStyleColumns(12));
            props.changeSize(imgColumns, styleColumns);
            setClick(!click);
          }}>
          {images ? (
            images.map((image, i) => (
              <Image key={i} image={image.url} clicked={click} />
            ))
          ) : (
            <CircularProgress className={classes.progress} />
          )}
        </Box>
        <IconButton
          className={clsx(classes.arrow, classes.nextArrow)}
          onClick={goToNextSlide}>
          <NextArrow />
        </IconButton>
      </Box>
      <IconButton
        className={classes.zoomIcon}
        onClick={() => {
          setClick(!click);
          click
            ? (setImgColumns(8),
              setStyleColumns(4),
              setSliderWidth({ width: 1000 }),
              setSlideWidth(1000))
            : (setImgColumns(12),
              setStyleColumns(12),
              setSliderWidth({ width: 750 }),
              setSlideWidth(750));
          props.changeSize(imgColumns, styleColumns);
        }}>
        <ZoomIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
