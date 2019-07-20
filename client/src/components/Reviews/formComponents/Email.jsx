import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 400
  }
}));

const Email = ({ form, setForm }) => {
  const classes = useStyles();

  const handleChange = e => {
    e.persist();
    setForm(prevState => {
      return { ...prevState, email: e.target.value };
    });
  };

  return (
    <React.Fragment>
      <TextField
        className={classes.textField}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="Why did you like the product or not"
        required
      />
      <span>For authentication reasons, you will not be emailed</span>
    </React.Fragment>
  );
};

export default Email;
