import React, { Fragment } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Checkmark from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  margin: {
    marginRight: theme.spacing(1),
  },
}));

const Features = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item sm={12} md={4}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignContent="space-around">
          {props.features
            ? props.features.map(feature => (
                <Grid container direction="row" key={feature.feature}>
                  <Checkmark className={classes.margin} />
                  <Typography variant="subtitle1" className={classes.margin}>
                    <strong>{`${feature.feature}:`}</strong>
                  </Typography>
                  <Typography variant="subtitle1" className={classes.margin}>
                    {feature.value}
                  </Typography>
                </Grid>
              ))
            : ''}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Features;
