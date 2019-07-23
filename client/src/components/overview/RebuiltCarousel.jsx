import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import BackArrow from '@material-ui/icons/ArrowBack';
import NextArrow from '@material-ui/icons/ArrowForward';
import CircularProgress from '@material-ui/core/CircularProgress';
// React Components
import Image from './Image.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '99%',
    height: '75vh',
    backgroundColor: '#E0E0E0',
  },
  slider: {
    position: 'relative',
    width: '75%',
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
  progress: {
    margin: theme.spacing(1),
  },
}));

const RebuiltCarousel = props => {
  const classes = useStyles();

  const [images, setImages] = useState();

  useEffect(() => {
    if (props.styles.results) {
      setImages(props.styles.results[props.index].photos);
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const [translateValue, setTranslateValue] = useState(0);

  const goToPreviousSlide = () => {
    if (currentIndex === 0) return;

    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + slideWidth());
  };

  const goToNextSlide = () => {
    if (images) {
      if (currentIndex === images.length - 1) {
        return setCurrentIndex(0), setTranslateValue(0);
      }
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth());
  };

  const slideWidth = () => {
    return document.querySelector('.makeStyles-slide-404').clientWidth;
  };

  const [click, setClick] = useState(false);

  const [imgColumns, setImgColumns] = useState(8);
  const [styleColumns, setStyleColumns] = useState(4);

  const changeColumns = () => {
    if (click === true) {
      setImgColumns(8);
      setStyleColumns(4);
    } else {
      setImgColumns(12);
      setStyleColumns(0);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.slider}>
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
            setClick(!click);
            changeColumns();
            props.changeSize(imgColumns, styleColumns);
          }}>
          {images ? (
            images.map((image, i) => <Image key={i} image={image.url} />)
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
    </Box>
  );
};

export default RebuiltCarousel;
