import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    board: '1px grey soild',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const SearchQuestion = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        variant="outlined"
        placeholder="Have a question? Search for answers"
        inputProps={{ 'aria-label': 'Have a question? Search for answers' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchQuestion;
