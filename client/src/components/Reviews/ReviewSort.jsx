import React from 'react';
import { connect } from 'react-redux';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import * as actions from '../../actions/Reviews/setSort.js';

const ReviewSort = props => {
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
      >
        <MenuItem value="relevant">relevance</MenuItem>
        <MenuItem value="newest">newest</MenuItem>
        <MenuItem value="helpful">helpful</MenuItem>
      </Select>
    </FormControl>
  );
};

let mapStateToProps = state => ({
  // productId: state.productId,
  sort: state.reviewSort,
});

export default connect(
  mapStateToProps,
  actions
)(ReviewSort);
