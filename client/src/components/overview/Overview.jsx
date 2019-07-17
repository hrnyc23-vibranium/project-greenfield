import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/overview';

class Overview extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.id);
    this.props.getProductStyles(this.props.id);
  }

  render() {
    console.log('this.props.product', this.props.product);
    console.log('this.props.styles', this.props.styles.results);

    const product = this.props.product;
    const styles = this.props.styles.results;
    return (
      <div>
        <nav>Vibranium</nav>
        <h5>{product.category}</h5>
        <h2>{product.name}</h2>
        <div>{product.default_price}</div>
        <div>{product.description}</div>
      </div>
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
