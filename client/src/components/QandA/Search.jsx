//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { setSearch } from '../../actions/QandA/setSearch';

//Material Componenets
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  // root: {
  //   margin: '10px 0',
  //   padding: '10px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   border: '1px solid grey',
  // },
  // input: {
  //   marginLeft: 8,
  //   flex: 6,
  // },
  iconButton: {
    padding: 10,
  },
});

const SearchQuestion = ({ keyword, setKeyword }) => {
  const classes = useStyles();

  return (
    <div className="search">
      <InputBase
        className="{classes.input}"
        variant="outlined"
        label="Search"
        placeholder="Have a question? Search for answers"
        inputProps={{ 'aria-label': 'Have a question? Search for answers' }}
        value={keyword}
        onChange={e => {
          setKeyword(e.target.value);
        }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    keyword: state.searchKeyword,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setKeyword: searchTerm => dispatch(setSearch(searchTerm)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchQuestion);
