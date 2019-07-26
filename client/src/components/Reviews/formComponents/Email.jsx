import React from 'react';
// Material UI Components
import { useStyles } from './inputStyle.js';
import { Box, TextField, InputLabel } from '@material-ui/core';

const Email = ({ email, handleChange, error }) => {
  const classes = useStyles();

  return (
    <Box>
      <InputLabel
        asterisk="true"
        className={error ? classes.titleError : classes.title}
        error={error}
      >
        Your email*
      </InputLabel>
      <TextField
        className={classes.textField}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="Example: jackson11@email.com"
        required
        name="email"
        value={email}
        error={error}
        helperText=" For authentication reasons, you will not be emailed"
      />
    </Box>
  );
};

export default Email;
