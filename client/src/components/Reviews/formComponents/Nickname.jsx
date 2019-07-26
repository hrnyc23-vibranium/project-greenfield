import React from 'react';

// Material UI Components
import { useStyles } from './inputStyle.js';
import { Box, TextField, InputLabel } from '@material-ui/core';

const Nickname = ({ name, handleChange, error }) => {
  const classes = useStyles();

  return (
    <Box>
      <InputLabel
        asterisk="true"
        className={error ? classes.titleError : classes.title}
        error={error}
      >
        What is your nickname*
      </InputLabel>
      <TextField
        className={classes.textField}
        required={true}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="Example: jackson11!"
        required={true}
        value={name}
        name="name"
        error={error}
        helperText="For privacy reasons, do not use your full name or email address"
      />
    </Box>
  );
};

export default Nickname;
