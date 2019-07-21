import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
//components
import RatingFilter from './RatingFilter.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
class Meta extends Component {
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

export default Meta;
