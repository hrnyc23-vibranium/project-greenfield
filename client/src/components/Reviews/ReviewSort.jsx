import React from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, FormControl } from '@material-ui/core';

//React Components
import * as actions from '../../actions/Reviews/setSort.js';

const useStyles = makeStyles(theme => ({
  selected: {
    fontWeight: 'bold',
    letterSpacing: '0.0075em',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
}));

//update list based on selected sort
const ReviewSort = props => {
  const classes = useStyles();

  const handleChange = e => {
    const { setSort } = props;
    setSort(e.target.value);
  };

  return (
    <FormControl>
      <Select
        value={props.sort}
        name="sort"
        displayEmpty
        onChange={handleChange}
        className={classes.selected}
      >
        <MenuItem value="relevant">relevance</MenuItem>
        <MenuItem value="newest">newest</MenuItem>
        <MenuItem value="helpful">helpful</MenuItem>
      </Select>
    </FormControl>
  );
};

let mapStateToProps = state => ({
  sort: state.reviewSort,
});

export default connect(
  mapStateToProps,
  actions
)(ReviewSort);
