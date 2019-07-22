import React from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useStyles } from './inputStyle.js';

const ReviewSummary = ({ summary, handleChange }) => {
  const classes = useStyles();
  return (
    <Box>
      <h4>Review Summary</h4>
      <TextField
        placeholder="Example: Best purchase ever!"
        className={classes.textField}
        value={summary}
        onChange={handleChange}
        inputProps={{ maxLength: 60 }}
        name="summary"
      />
    </Box>
  );
};

export default ReviewSummary;
