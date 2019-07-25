import React from 'react';

// Material UI Components
import { useStyles } from './inputStyle.js';
import { Box, TextField } from '@material-ui/core';

const ReviewSummary = ({ summary = '', handleChange, error }) => {
  const classes = useStyles();
  return (
    <Box>
      <h4 className={error ? classes.titleError : classes.title}>
        Review Summary*
      </h4>
      <TextField
        placeholder="Example: Best purchase ever!"
        className={classes.textField}
        value={summary}
        onChange={handleChange}
        inputProps={{ maxLength: 60 }}
        name="summary"
        error={error}
      />
    </Box>
  );
};

export default ReviewSummary;
