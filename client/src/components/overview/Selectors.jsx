import React, { Fragment } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Selectors = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel>Select Size</InputLabel>
          <Select>
            <MenuItem value={'xs'}>XS</MenuItem>
            <MenuItem value={'s'}>S</MenuItem>
            <MenuItem value={'m'}>M</MenuItem>
            <MenuItem value={'l'}>L</MenuItem>
            <MenuItem value={'xl'}>XL</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Select Qty</InputLabel>
          <Select>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Fragment>
  );
};

export default Selectors;
