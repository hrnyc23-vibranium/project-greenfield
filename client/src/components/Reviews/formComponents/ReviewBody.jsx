import React from 'react';
// Material UI Components

import { useStyles } from './inputStyle.js';
import { Box, TextField, InputLabel } from '@material-ui/core';

const ReviewBody = ({ body, handleChange, error }) => {
  const minReqChars = () => {
    let remainingChars = 50 - body.length;
    return remainingChars > 0
      ? `Minimum required characters left: ${remainingChars}`
      : 'Minimum reached';
  };

  const classes = useStyles();
  return (
    <Box>
      <InputLabel
        asterisk="true"
        className={error ? classes.titleError : classes.title}
        error={error}
      >
        Review Body*
      </InputLabel>
      <TextField
        className={classes.textField}
        inputProps={{ maxLength: 1000 }}
        multiline
        onChange={handleChange}
        placeholder="Why did you like the product or not"
        required={true}
        value={body}
        name="body"
        error={error}
      />
      <Box className={classes.description}>{minReqChars()}</Box>
    </Box>
  );
};

export default ReviewBody;
