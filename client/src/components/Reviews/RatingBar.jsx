import React from 'react';
import { connect } from 'react-redux';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import * as actions from '../../actions/Reviews/setFilter.js';

const BorderLinearProgress = withStyles({
  root: {
    height: 12,
    backgroundColor: '#cfcfcf',
    marginTop: '4px',
  },
  bar: {
    backgroundColor: '#000042',
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  button: {
    display: 'inline',
    marginRight: theme.spacing(1),
    padding: theme.spacing(0),
    fontSize: 10,
    textDecoration: 'underline',
  },
}));

const RatingBar = props => {
  const { ratings, totalReviews } = props;
  const classes = useStyles();

  //calculate percent of total rating  for each rating
  const normalizeRating = (curr = 0, total) => {
    if (total === 0) {
      return 0;
    }
    return (curr / total) * 100;
  };

  const handleClick = rating => {
    const { filter, addFilter, deleteFilter } = props;
    filter[rating] ? deleteFilter(rating) : addFilter(rating);
  };

  return (
    <Grid container direction="column">
      {[1, 2, 3, 4, 5].map(rating => {
        let normalized = normalizeRating(ratings[rating], totalReviews);
        return (
          <Grid container direction="row" key={rating}>
            <Grid item sm={12} md={3}>
              <div>
                <Button
                  component="span"
                  className={classes.button}
                  onClick={handleClick.bind(this, rating)}
                >
                  {rating} stars
                </Button>
              </div>
            </Grid>
            <Grid item sm={12} md={9}>
              <BorderLinearProgress variant="determinate" value={normalized} />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

let mapStateToProps = state => ({
  filter: state.reviewFilter,
});

export default connect(
  mapStateToProps,
  actions
)(RatingBar);
