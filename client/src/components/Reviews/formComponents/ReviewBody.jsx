import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 400
  }
}));

const ReviewBody = ({ form, setForm }) => {
  const handleChange = e => {
    e.persist();
    setForm(prevState => {
      return { ...prevState, body: e.target.value };
    });
  };

  const minReqChars = () => {
    let remainingChars = 50 - form.body.length;
    return remainingChars > 0
      ? `Minimum required characters left: ${remainingChars}`
      : 'Minimum reached';
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        required={true}
        multiline
        placeholder="Why did you like the product or not"
        className={classes.textField}
        value={form.body}
        onChange={handleChange}
        inputProps={{ maxLength: 1000 }}
      />
      <span>{minReqChars()}</span>
    </React.Fragment>
  );
};

export default ReviewBody;
