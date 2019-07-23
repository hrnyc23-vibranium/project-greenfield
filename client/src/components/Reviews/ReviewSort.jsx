import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/Reviews/setSort.js';

import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  selected: {
    fontWeight: 'bold',
    fontSize: 16,
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
