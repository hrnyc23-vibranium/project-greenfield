import React, { useState } from 'react';
// Material UI Components
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NextArrow from '@material-ui/icons/KeyboardArrowRightRounded';
import BackArrow from '@material-ui/icons/KeyboardArrowLeftRounded';

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
  console.log('props', props);

  const [index, setIndex] = useState(0);

  return (
    <Box className={classes.root}>
      <Box className={classes.arrow}>
        <IconButton
          onClick={() => {
            setIndex(Math.max(index - 1, 0));
          }}>
          <BackArrow />
        </IconButton>
      </Box>
      {props.styles.results ? (
        <img src={props.img} className={classes.img} />
      ) : (
        <CircularProgress className={classes.progress} />
      )}
      <Box className={classes.arrow}>
        <IconButton
          onClick={() => {
            setIndex(Math.min(index + 1, 5));
          }}>
          <NextArrow />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
