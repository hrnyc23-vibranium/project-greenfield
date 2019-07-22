import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  slide: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
  },
}));

const Image = ({ image }) => {
  const classes = useStyles();

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return <div className={classes.slide} style={styles} />;
};

export default Image;
