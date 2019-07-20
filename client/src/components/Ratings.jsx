import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Ratings = props => {
  return (
    <div>
      <Rating name="rating" readOnly value={props.rating} precision={0.25} />
    </div>
  );
};

export default Ratings;
