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
        <Grid container>
          <Grid item l={2}>
            <Grid container spacing={10}>
              <Grid item>
                <Meta />
              </Grid>
              <Grid item>
                <ReviewsList />
                <Button size="large" variant="outlined">
                  MORE REVIEWS
                </Button>
                <Button size="large" variant="outlined">
                  ADD A REVIEW +
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Reviews;
