import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/overview';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// Components
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';

class Overview extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.id);
    this.props.getProductStyles(this.props.id);
  }

  render() {
    const product = this.props.product;
    const styles = this.props.styles.results;
    return (
      <Box>
        <Header />
        <Grid container direction="row">
          <Grid item xs={12} sm={8}>
            <Carousel />
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>Stars</p>
            <h5>{product.category}</h5>
            <h2>{product.name}</h2>
            <Box>{product.slogan}</Box>
            <Box>{`$${product.default_price}`}</Box>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={12} sm={8}>
            <Box>{product.description}</Box>
          </Grid>
        </Grid>
      </Box>
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
