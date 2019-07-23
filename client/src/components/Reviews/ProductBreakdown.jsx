import React from 'react';
import { connect } from 'react-redux';

//Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

//React Components
import * as actions from '../../actions/Reviews/getData.js';

const descriptions = {
  Fit: ['Too small', 'Perfect', 'Too wide'],
  Size: ['Too small', 'Perfect', 'Too wide'],
  Length: ['Too short', 'Perfect', 'Too Long'],
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
        let number = Number(breakdown[category]) * 10;
        return (
          <Box key={category} className={classes.category}>
            <span>{category}</span>

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
    <div>Loading...</div>
  );
};

let mapStateToProps = state => ({
  breakdown: state.metaInfo.characteristics,
});

export default connect(
  mapStateToProps,
  actions
)(ProductBreakdown);
