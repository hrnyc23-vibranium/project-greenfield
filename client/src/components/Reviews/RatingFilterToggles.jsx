import React from 'react';
import { connect } from 'react-redux';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Box, Chip } from '@material-ui/core';

//React Components
import * as actions from '../../actions/Reviews/setFilter.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
  },
  button: {
    display: 'inline',
    marginRight: theme.spacing(1),
    padding: theme.spacing(0),
    fontSize: 14,
    textDecoration: 'underline',
    textTransform: 'none',
  },
  chip: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
}));

const RatingFilterToggles = props => {
  const { filters, resetFilter, deleteFilter } = props;
  const classes = useStyles();

  //remove filters on click
  const handleReset = e => {
    resetFilter();
  };

  //remove a filter on click
  const handleRemove = filter => {
    deleteFilter(filter);
  };

  //show all selected filters
  const renderFilters = () => {
    return Object.keys(filters).map(filter => {
      return (
        <Chip
          size="small"
          className={classes.chip}
          key={filter}
          onClick={handleRemove.bind(this, filter)}
          label={filter + ' stars'}
          clickable
        />
      );
    });
  };

  if (Object.keys(filters).length > 0) {
    return (
      <Box className={classes.root}>
        <Chip
          size="small"
          className={classes.chip}
          onClick={handleReset.bind(this)}
          label="Remove all filters"
          clickable
        />
        {renderFilters()}
      </Box>
    );
  } else {
    return '';
  }
};

let mapStateToProps = state => ({
  filters: state.reviewFilter,
});

export default connect(
  mapStateToProps,
  actions
)(RatingFilterToggles);
