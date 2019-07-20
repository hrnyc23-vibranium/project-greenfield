import React from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';

const OverallRating = ({ form, setForm }) => {
  const renderMeaning = rating => {
    let ratings = {
      '1': 'Poor',
      '2': 'Fair',
      '3': 'Average',
      '4': 'Good',
      '5': 'Great'
    };
    return <div> {ratings[rating]} </div>;
  };

  const handleChange = (e, newValue) => {
    setForm(prevState => {
      return { ...prevState, rating: newValue };
    });
  };

  return (
    <Grid container direction="row">
      <Rating
        name="rating"
        value={form.rating}
        onChange={handleChange}
        precision={1}
      />
      {renderMeaning(form.rating)}
    </Grid>
  );
};

export default OverallRating;
