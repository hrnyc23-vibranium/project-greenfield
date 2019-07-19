import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/Reviews/getData.js';
class ProductBreakdown extends Component {
  renderBreakdown(breakdown) {
    return Object.keys(breakdown).map(category => {
      let number = Number(breakdown[category]) * 10;
      return (
        <div key={category}>
          {category}
          <div>
            <input
              type="range"
              min="0"
              max="50"
              readOnly
              className="slider"
              value={number}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    const { breakdown } = this.props;
    return breakdown ? (
      <div>
        ProductBreakdown
        {this.renderBreakdown(breakdown)}
      </div>
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
