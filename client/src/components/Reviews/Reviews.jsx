import React, { Component } from 'react';
import { connect } from 'react-redux';
// Material UI Components
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

// React Components
import Meta from './Meta.jsx';
import ReviewsList from './ReviewsList.jsx';
import WriteReview from './WriteReview.jsx';
import * as actions from '../../actions/Reviews/setOpen.js';

class Reviews extends Component {
  handleOpen() {
    this.props.setOpen(true);
  }
  handleClose() {
    this.props.setOpen(false);
  }

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
            {/* only show if reviewlist length is greater than 2 */}
            <Button size="large" variant="outlined">
              MORE REVIEWS
            </Button>
            <Button
              size="large"
              variant="outlined"
              onClick={this.handleOpen.bind(this)}
            >
              ADD A REVIEW +
            </Button>
            <Dialog
              open={this.props.open}
              onClose={this.handleClose}
              fullWidth={true}
              maxWidth="md"
            >
              <WriteReview handleClose={this.handleClose.bind(this)} />
            </Dialog>
          </Grid>
        </Grid>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  open: state.open,
});

export default connect(
  mapStateToProps,
  actions
)(Reviews);
