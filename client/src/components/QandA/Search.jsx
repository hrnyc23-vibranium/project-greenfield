//Dev Dependencies
import React from 'react';

//Material Componenets
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    margin: '10px 0',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid grey',
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
        label="Search"
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
