import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';

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

const RatingBar = props => {
  const normalizeRating = (curr, total) => {
    if (total === 0) {
      return 0;
    }
    return (curr / total) * 100;
  };

  const { ratings, totalReviews } = props;
  return ratings ? (
    <Grid container direction="column">
      {[1, 2, 3, 4, 5].map(num => {
        let normalized = normalizeRating(
          ratings[num] || 0,
          totalReviews.length
        );
        return (
          <Grid container direction="row" key={num}>
            <Grid item sm={12} md={2}>
              <span>{num} Star</span>
            </Grid>
            <Grid item sm={12} md={10}>
              <BorderLinearProgress variant="determinate" value={normalized} />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <div>Loading...</div>
  );
};

export default RatingBar;
