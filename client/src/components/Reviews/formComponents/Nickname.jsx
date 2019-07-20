import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 400
  }
}));

const Nickname = ({ form, setForm }) => {
  const classes = useStyles();

  const handleChange = e => {
    e.persist();
    setForm(prevState => {
      return { ...prevState, name: e.target.value };
    });
  };

  return (
    <React.Fragment>
      <TextField
        className={classes.textField}
        required={true}
        inputProps={{ maxLength: 60 }}
        onChange={handleChange}
        placeholder="Example: Captain America"
        required={true}
        value={form.name}
      />
      <span>
        For privacy reasons, do not use your full name or email address
      </span>
    </React.Fragment>
  );
};

export default Nickname;
