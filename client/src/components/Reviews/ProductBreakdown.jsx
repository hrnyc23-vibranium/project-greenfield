import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import * as actions from '../../actions/Reviews/getData.js';
class ProductBreakdown extends Component {
  renderLabel(category) {
    if (category === 'Fit' || category === 'Length') {
      return (
        <label htmlFor="tickmarks">
          <Grid container direction="row" justify="space-between">
            <option value="0" label="Too small" />
            <option value="0" label="Perfect" />
            <option value="0" label="Too large" />
          </Grid>
        </label>
      );
    }
    return (
      <label htmlFor="tickmarks">
        <Grid container direction="row" justify="space-between">
          <option value="0" label="Poor" />
          <option value="0" label="Perfect" />
        </Grid>
      </label>
    );
  }

  renderBreakdown(breakdown) {
    return Object.keys(breakdown).map(category => {
      let number = Number(breakdown[category]) * 10;
      return (
        <div key={category}>
          <br />
          {category}
          <div>
            <input
              type="range"
              min="0"
              max="50"
              readOnly
              className="slider"
              list="tickmarks"
              value={number}
            />
            {this.renderLabel(category)}
          </div>
        </div>
      );
    });
  }

  render() {
    const { breakdown } = this.props;
    return breakdown ? (
      <React.Fragment>
        ProductBreakdown
        {this.renderBreakdown(breakdown)}
      </React.Fragment>
    ) : (
      <div>Loading...</div>
    );
  }
}

let mapStateToProps = state => ({
  breakdown: state.metaInfo.characteristics
});

export default connect(
  mapStateToProps,
  actions
)(ProductBreakdown);
