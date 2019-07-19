import React, { Component } from 'react';
// Material UI Components
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '750px',
    height: '750px',
  },
  img: {
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  progress: {
    margin: theme.spacing(1),
  },
}));

const Carousel = props => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {props.styles.results ? (
        <img
          src={props.styles.results[0].photos[0].url}
          className={classes.img}
        />
      ) : (
        <CircularProgress className={classes.progress} />
      )}
    </Box>
  );
};

export default Carousel;
