import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/overview';

class Overview extends Component {
  componentDidMount() {
    this.props.getProduct();
    this.props.getProductStyles();
  }

  render() {
    return (
      <div>
        <h1>Overview</h1>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Overview);
