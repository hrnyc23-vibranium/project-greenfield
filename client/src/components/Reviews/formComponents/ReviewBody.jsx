import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 500,
  },
}));

const ReviewBody = ({ body, handleChange }) => {
  const minReqChars = () => {
    let remainingChars = 50 - body.length;
    return remainingChars > 0
      ? `Minimum required characters left: ${remainingChars}`
      : 'Minimum reached';
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        className={classes.textField}
        inputProps={{ maxLength: 1000 }}
        multiline
        onChange={handleChange}
        placeholder="Why did you like the product or not"
        required={true}
        value={body}
        name="body"
      />
      <span>{minReqChars()}</span>
    </React.Fragment>
  );
};

export default ReviewBody;
