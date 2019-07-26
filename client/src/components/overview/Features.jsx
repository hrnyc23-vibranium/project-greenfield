import React, { Fragment } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Checkmark from '@material-ui/icons/Check';
import { Grid, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  featureMargin: {
    marginLeft: theme.spacing(2),
  },
  margin: {
    marginRight: theme.spacing(1),
  },
  checkmark: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const Features = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item md={12} lg={8} className={classes.root}>
        <Typography variant="h6" gutterBottom>
          {props.slogan}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {props.description}
        </Typography>
      </Grid>
      <Grid item md={12} lg={4} className={classes.root}>
        <Box borderLeft={2}>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignContent="space-around">
            {props.features
              ? props.features.map(feature => (
                  <Grid container direction="row" key={feature.feature}>
                    <Checkmark className={classes.checkmark} />
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
        </Box>
      </Grid>
    </Fragment>
  );
};

export default Features;
