import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 400,
  },
}));

const Nickname = ({ name, handleChange }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        className={classes.textField}
        required={true}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="Example: Captain America"
        required={true}
        value={name}
        name="name"
      />
      <span>
        For privacy reasons, do not use your full name or email address
      </span>
    </React.Fragment>
  );
};

export default Nickname;
