import React from 'react';
import { connect } from 'react-redux';
// Material UI Components
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const Selectors = () => {
  return (
    <div>
      <p>Size Selector!</p>
      <FormControl>
        <InputLabel>Select Size</InputLabel>
        <Select>
          <MenuItem>10</MenuItem>
          <MenuItem>20</MenuItem>
          <MenuItem>30</MenuItem>
          <MenuItem>40</MenuItem>
        </Select>
      </FormControl>
      <p>Quantity Selector!</p>
    </div>
  );
};

const mapStateToProps = state => ({
  styles: state.styles,
});

export default connect(mapStateToProps)(Selectors);
