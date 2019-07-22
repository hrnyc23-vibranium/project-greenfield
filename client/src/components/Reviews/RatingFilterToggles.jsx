import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
        <Button
          component="span"
          className={classes.button}
          key={filter}
          onClick={handleRemove.bind(this, filter)}
        >
          {filter} stars
        </Button>
      );
    });
  };

  if (Object.keys(filters).length > 0) {
    return (
      <div className={classes.root}>
        <Button
          component="span"
          className={classes.button}
          onClick={handleReset.bind(this)}
        >
          Remove all filters
        </Button>
        {renderFilters()}
      </div>
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
