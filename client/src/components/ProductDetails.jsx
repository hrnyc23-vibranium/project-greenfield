import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/setCurrentId.js';

class ProductDetails extends Component {
  componentDidMount() {
    const { setCurrentId, match } = this.props;
    setCurrentId(match.params.id);
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(ProductDetails);
