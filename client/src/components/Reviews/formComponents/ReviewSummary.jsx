import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    width: 400
  }
}));
const ReviewSummary = ({ form, setForm }) => {
  const handleChange = e => {
    e.persist();
    setForm(prevState => {
      return { ...prevState, summary: e.target.value };
    });
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        placeholder="Example: Best purchase ever!"
        className={classes.textField}
        value={form.summary}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default ReviewSummary;
