import React from 'react';
import { connect } from 'react-redux';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import * as actions from '../../actions/Reviews/getData.js';

const ReviewSort = () => {
  return (
    <FormControl>
      <Select value="relevant" name="sort" displayEmpty>
        <MenuItem value="relevant">relevance</MenuItem>
        <MenuItem value="newest">newest</MenuItem>
        <MenuItem value="helpful">helpful</MenuItem>
      </Select>
    </FormControl>
  );
};

export default connect(
  null,
  actions
)(ReviewSort);
