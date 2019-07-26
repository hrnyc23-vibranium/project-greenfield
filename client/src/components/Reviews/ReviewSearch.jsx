import React from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Box, InputBase, IconButton } from '@material-ui/core';

//React Components
import * as actions from '../../actions/Reviews/setReviewSearch.js';

const useStyles = makeStyles({
  input: {
    // marginLeft: 8,
    // flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const ReviewSearch = ({ search, setReviewSearch }) => {
  const classes = useStyles();

  const handleSearch = e => {
    setReviewSearch(e.target.value);
  };

  return (
    <Box className="search">
      <InputBase
        className={classes.input}
        variant="outlined"
        label="Search"
        placeholder="Keyword search"
        onChange={handleSearch}
        value={search}
      />
      <IconButton className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

let mapStateToProps = state => ({
  search: state.reviewSearch,
});

export default connect(
  mapStateToProps,
  actions
)(ReviewSearch);
