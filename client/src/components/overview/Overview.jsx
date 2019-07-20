import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/overview';
// Material UI Components
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
        <Grid container direction="row">
          <Grid item sm={12} md={8}>
            <Carousel styles={styles} />
          </Grid>
          <Grid item sm={12} md={4}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignContent="space-around">
              <p>Average Rating</p>
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
        <Grid container direction="row">
          <Grid item sm={12} md={8}>
            <Typography variant="h6" gutterBottom>
              {product.slogan}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
          </Grid>
          <Features features={product.features} />
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
