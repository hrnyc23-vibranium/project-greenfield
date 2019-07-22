import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 400,
  },
}));
const ReviewSummary = ({ summary, handleChange }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        placeholder="Example: Best purchase ever!"
        className={classes.textField}
        value={summary}
        onChange={handleChange}
        inputProps={{ maxLength: 60 }}
        name="summary"
      />
    </React.Fragment>
  );
};

export default ReviewSummary;
