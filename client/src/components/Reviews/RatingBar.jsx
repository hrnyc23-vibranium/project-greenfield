import React from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, LinearProgress } from '@material-ui/core';

//React Components
import * as actions from '../../actions/Reviews/setFilter.js';
import RatingFilterToggles from './RatingFilterToggles.jsx';

const BorderLinearProgress = withStyles({
  root: {
    height: 12,
    backgroundColor: '#cfcfcf',
    marginTop: '9px',
  },
  bar: {
    backgroundColor: '#000042',
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0, 3, 0),
  },
  button: {
    display: 'inline',
    marginRight: theme.spacing(0),
    padding: theme.spacing(0),
    fontSize: '1rem !important',
    textDecoration: 'underline',
    textTransform: 'none',
    fontWeight: 'normal',
  },
  toggles: {
    height: 20,
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
    <Grid container direction="column" className={classes.root}>
      {[5, 4, 3, 2, 1].map(rating => {
        let normalized = normalizeRating(ratings[rating], totalReviews);
        return (
          <Grid container direction="row" key={rating}>
            <Grid item sm={12} md={3}>
              <Box>
                <Button
                  component="span"
                  className="rating"
                  className={classes.button}
                  onClick={handleClick.bind(this, rating)}
                >
                  {rating} {rating === 1 ? 'star' : 'stars'}
                </Button>
              </Box>
            </Grid>
            <Grid item sm={12} md={9}>
              <BorderLinearProgress variant="determinate" value={normalized} />
            </Grid>
          </Grid>
        );
      })}
      <span className={classes.filters}>
        <RatingFilterToggles />
      </span>
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
