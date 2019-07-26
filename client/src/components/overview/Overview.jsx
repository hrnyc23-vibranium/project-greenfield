import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/overview';
// Material UI Components
import { Grid, Typography, Link } from '@material-ui/core';
// React Components
import Product from './Product.jsx';
import Features from './Features.jsx';

class Overview extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.getProduct(this.props.id);
      this.props.getProductStyles(this.props.id);
    }
  }

  render() {
    const { product, styles, id, ratings, totalReviews } = this.props;
    return (
      <Fragment>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="overline" gutterBottom>
            <em>Select Styles on Sale!</em> - Camo Onesie -{' '}
            <strong>30% off</strong> -{' '}
            <Link href={'1'} color="inherit" underline="always">
              Buy Now!
            </Link>
          </Typography>
        </Grid>
        <Product
          styles={styles}
          product={product}
          id={id}
          ratings={ratings}
          totalReviews={totalReviews}
        />
        <Grid container direction="row" justify="space-between">
          <Features
            slogan={product.slogan}
            description={product.description}
            features={product.features}
          />
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  id: state.productId,
  product: state.product,
  styles: state.styles,
});

export default connect(
  mapStateToProps,
  actions
)(Overview);
