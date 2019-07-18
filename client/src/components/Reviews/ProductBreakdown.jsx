import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/Reviews/getData.js';
class ProductBreakdown extends Component {
  render() {
    console.log(this.props.breakdown);
    return (
      <div>
        ProductBreakdown
        <div>size</div>
      </div>
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
