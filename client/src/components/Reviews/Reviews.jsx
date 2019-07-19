import React, { Component } from 'react';
// Material UI Components
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';
import Meta from './Meta.jsx';
// React Components
import ReviewsList from './ReviewsList.jsx';
class Reviews extends Component {
  render() {
    return (
      <div>
        RATINGS & REVIEWS
        <Grid container direction="row" justify="space-between">
          <Grid item sm={12} md={3}>
            <Meta />
          </Grid>
          <Grid item sm={12} md={9}>
            <ReviewsList />
            <Button size="large" variant="outlined">
              MORE REVIEWS
            </Button>
            <Button size="large" variant="outlined">
              ADD A REVIEW +
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Reviews;
