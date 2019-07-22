import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 400,
  },
}));

const Email = ({ email, handleChange }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        className={classes.textField}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="Why did you like the product or not"
        required
        name="email"
        value={email}
      />
      <span>For authentication reasons, you will not be emailed</span>
    </React.Fragment>
  );
};

export default Email;
