import React from 'react';

// Material UI Components
import { useStyles } from './inputStyle.js';
import { Box, TextField } from '@material-ui/core';

const Nickname = ({ name, handleChange, error }) => {
  const classes = useStyles();

  return (
    <Box>
      <h4 className={error ? classes.titleError : classes.title}>
        What is your nickname*
      </h4>
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
      />
      <Box className={classes.description}>
        For privacy reasons, do not use your full name or email address
      </Box>
    </Box>
  );
};

export default Nickname;
