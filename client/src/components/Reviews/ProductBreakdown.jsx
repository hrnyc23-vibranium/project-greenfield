import React from 'react';
import { connect } from 'react-redux';

//Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

//React Components
import * as actions from '../../actions/Reviews/getData.js';

const descriptions = {
  Fit: ['Runs tight', 'Perfect', 'Runs long'],
  Size: ['Too small', 'Perfect', 'Too wide'],
  Length: ['Runs Short', 'Perfect', 'Runs long'],
  Width: ['Too narrow', 'Perfect', 'Too wide'],
  Comfort: ['Poor', '', 'Perfect'],
  Quality: ['Poor', '', 'Perfect'],
};

const useStyles = makeStyles(theme => ({
  category: {
    marginBottom: theme.spacing(2),
  },
}));

const ProductBreakdown = props => {
  const { breakdown } = props;
  const classes = useStyles();

  const renderLabel = category => {
    return (
      <label htmlFor="tickmarks">
        <Grid container direction="row" justify="space-between">
          <option value="0" label={descriptions[category][0]} />
          {!category === 'Comfort' || !category === 'Quality'}{' '}
          {<option value="2" label={descriptions[category][1]} />}
          <option value="3" label={descriptions[category][2]} />
        </Grid>
      </label>
    );
  };

  return breakdown ? (
    <Box>
      {Object.keys(breakdown).map(category => {
        let number = Number(breakdown[category].value) * 10;
        return (
          <Box key={category} className={classes.category}>
            <Typography variant="caption">{category}</Typography>

            <Box>
              <input
                type="range"
                min="0"
                max="50"
                readOnly
                className="slider"
                list="tickmarks"
                value={number}
              />

              {renderLabel(category)}
            </Box>
          </Box>
        );
      })}
    </Box>
  ) : (
    <Box>Loading...</Box>
  );
};

let mapStateToProps = state => ({
  breakdown: state.metaInfo.characteristics,
});

export default connect(
  mapStateToProps,
  actions
)(ProductBreakdown);
