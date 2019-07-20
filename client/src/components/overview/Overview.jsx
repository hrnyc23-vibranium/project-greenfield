import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/overview';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// React Components
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import StyleList from './StyleList.jsx';
import Features from './Features.jsx';

class Overview extends Component {
  // componentDidMount() {
  //   this.props.getProduct(this.props.id);
  //   this.props.getProductStyles(this.props.id);
  // }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.getProduct(this.props.id);
      this.props.getProductStyles(this.props.id);
    }
  }

  render() {
    const product = this.props.product;
    const styles = this.props.styles;
    const id = this.props.id;
    return (
      <Box>
        <Header />
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="overline" gutterBottom>
            <em>Select Styles on Sale!</em> - Camo Onesie -{' '}
            <strong>30% off</strong> -{' '}
            <Link href={'1'} color="inherit" underline="always">
              Buy Now!
            </Link>
          </Typography>
        </Grid>
        <Grid container direction="row">
          <Grid item md={12} lg={8}>
            <Carousel styles={styles} />
          </Grid>
          <Grid item md={12} lg={4} style={{ marginTop: 5 }}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignContent="space-around">
              <Link
                href={'#'}
                color="inherit"
                variant="body2"
                underline="always">
                Read All Reviews
              </Link>
              <Typography variant="overline" gutterBottom>
                {product.category}
              </Typography>
              <Typography variant="h3" gutterBottom>
                {product.name}
              </Typography>
              <StyleList product={product} styles={styles} id={id} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="space-between">
          <Features
            slogan={product.slogan}
            description={product.description}
            features={product.features}
          />
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
