import React from 'react';

// Material UI Components
import { useStyles } from './inputStyle.js';
import { Box, TextField, InputLabel } from '@material-ui/core';

const ReviewSummary = ({ summary = '', handleChange, error }) => {
  const classes = useStyles();
  return (
    <Box>
      <InputLabel
        asterisk="true"
        className={error ? classes.titleError : classes.title}
        error={error}
      >
        Review Summary*
      </InputLabel>
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
