import React from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useStyles } from './inputStyle.js';

const ReviewBody = ({ body, handleChange }) => {
  const minReqChars = () => {
    let remainingChars = 50 - body.length;
    return remainingChars > 0
      ? `Minimum required characters left: ${remainingChars}`
      : 'Minimum reached';
  };

  const classes = useStyles();
  return (
    <Box>
      <h4>Review Body*</h4>
      <TextField
        className={classes.textField}
        inputProps={{ maxLength: 1000 }}
        multiline
        onChange={handleChange}
        placeholder="Why did you like the product or not"
        required={true}
        value={body}
        name="body"
      />
      <Box className={classes.description}>{minReqChars()}</Box>
    </Box>
  );
};

export default ReviewBody;
