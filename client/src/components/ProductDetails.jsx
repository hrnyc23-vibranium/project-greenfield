import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/setCurrentId.js';
// React components
import Overview from './overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Questions from './QandA/QuestionAndAnswers';

import { Grid } from '@material-ui/core';

class ProductDetails extends Component {
  componentDidMount() {
    const { setCurrentId, match } = this.props;
    setCurrentId(match.params.id);
  }
  render() {
    return (
      <Fragment>
        <Overview />
        <Grid>
          <Questions />
          <Reviews />
        </Grid>
      </Fragment>
    );
  }
}

export default connect(
  null,
  actions
)(ProductDetails);
