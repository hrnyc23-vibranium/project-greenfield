import React from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useStyles } from './inputStyle.js';

const Email = ({ email, handleChange }) => {
  const classes = useStyles();

  return (
    <Box>
      <h4>Your email*</h4>
      <TextField
        className={classes.textField}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="Why did you like the product or not"
        required
        name="email"
        value={email}
      />
      <Box className={classes.description}>
        For authentication reasons, you will not be emailed
      </Box>
    </Box>
  );
};

export default Email;
