import React, { useState } from 'react';
// Material UI Components
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NextArrow from '@material-ui/icons/KeyboardArrowRightRounded';
import BackArrow from '@material-ui/icons/KeyboardArrowLeftRounded';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '95%',
    height: '750px',
    backgroundColor: '#E0E0E0',
    marginTop: theme.spacing(1),
  },
  arrow: {
    marginTop: '375px',
  },
  img: {
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  progress: {
    margin: theme.spacing(1),
  },
}));

const Carousel = props => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState(true);

  const changePrevious = index => {
    if (index <= 1) {
      setPrevious(true);
    }
    if (index <= 5) {
      setNext(false);
    }
  };
  const [next, setNext] = useState(false);

  const changeNext = index => {
    if (index >= 0) {
      setPrevious(false);
    }
    if (index === 4) {
      setNext(true);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.arrow}>
        <IconButton
          disabled={previous}
          onClick={() => {
            setIndex(Math.max(index - 1, 0));
            changePrevious(index);
          }}>
          <BackArrow />
        </IconButton>
      </Box>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        {props.styles.results ? (
          <img
            src={props.styles.results[props.index].photos[index].url}
            className={classes.img}
          />
        ) : (
          <CircularProgress className={classes.progress} />
        )}
      </Slide>
      <Box className={classes.arrow}>
        <IconButton
          disabled={next}
          onClick={() => {
            setIndex(Math.min(index + 1, 5));
            changeNext(index);
          }}>
          <NextArrow />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
