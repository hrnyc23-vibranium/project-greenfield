import React, { Component, Fragment } from 'react';
import StyleList from './StyleList.jsx';
import CartButton from './CartButton.jsx';

class Style extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStyle: 'Forest Green & Black',
      originalPrice: '140',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('e', e.target);
    this.setState({
      currentStyle: e.target.alt,
    });
  }

  render() {
    return (
      <Fragment>
        <StyleList
          styles={this.props.styles}
          id={this.props.id}
          currentStyle={this.state.currentStyle}
          originalPrice={this.state.originalPrice}
          handleClick={this.handleClick}
        />
        <CartButton />
      </Fragment>
    );
  }
}

export default Style;
