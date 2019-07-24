import React from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useStyles } from './inputStyle.js';

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
