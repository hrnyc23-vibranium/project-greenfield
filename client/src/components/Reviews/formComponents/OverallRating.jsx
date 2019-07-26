import React from 'react';

// Material UI Components
import { useStyles } from './inputStyle.js';
import { Box, Grid, InputLabel } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const OverallRating = ({ form, setForm, error }) => {
  const classes = useStyles();

  const renderMeaning = rating => {
    let ratings = {
      '1': 'Poor',
      '2': 'Fair',
      '3': 'Average',
      '4': 'Good',
      '5': 'Great',
    };
    return <Box> {ratings[rating]} </Box>;
  };

  const handleChange = (e, newValue) => {
    setForm(prevState => {
      return { ...prevState, rating: newValue };
    });
  };

  return (
    <Box>
      <InputLabel
        asterisk="true"
        className={error ? classes.titleError : classes.title}
        error={error}
      >
        Overall Rating
      </InputLabel>
      <Grid container direction="row" style={{ marginTop: '5px' }}>
        <Rating
          label="Overall Rating*"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          precision={1}
        />
        {renderMeaning(form.rating)}
      </Grid>
    </Box>
  );
};

export default OverallRating;
