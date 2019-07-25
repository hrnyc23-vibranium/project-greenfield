import React from 'react';
// Material UI Components
import { useStyles } from './inputStyle.js';
import { Box, TextField } from '@material-ui/core';

const Email = ({ email, handleChange, error }) => {
  const classes = useStyles();

  return (
    <Box>
      <h4 className={error ? classes.titleError : classes.title}>
        Your email*
      </h4>
      <TextField
        className={classes.textField}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="Example: jackson11@email.com"
        required
        name="email"
        value={email}
        error={error}
      />
      <Box className={classes.description}>
        For authentication reasons, you will not be emailed
      </Box>
    </Box>
  );
};

export default Email;
