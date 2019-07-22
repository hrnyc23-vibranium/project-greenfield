import React from 'react';
// Material UI Components
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  star: {
    color: '#000042',
  },
}));

const Ratings = props => {
  const classes = useStyles();
  return (
    <div>
      <Rating
        name="rating"
        readOnly
        value={props.rating}
        precision={0.25}
        size="small"
        className={classes.star}
      />
    </div>
  );
};

export default Ratings;
