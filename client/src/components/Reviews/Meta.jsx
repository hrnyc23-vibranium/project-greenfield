import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI Components
import Grid from '@material-ui/core/Grid';

//React Components
import RatingFilter from './RatingFilter.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import * as actions from '../../actions/Reviews/getData.js';
class Meta extends Component {
  componentDidUpdate(prevProps) {
    getMeta(productId);
    const { productId, getMeta } = this.props;
    if (productId !== prevProps.productId) {
      getMeta(productId);
    }
  }
  render() {
    return (
      <Grid container direction="column">
        <Grid item md={10}>
          <RatingFilter />
        </Grid>
        <Grid item md={10}>
          <ProductBreakdown />
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  null,
  actions
)(Meta);
