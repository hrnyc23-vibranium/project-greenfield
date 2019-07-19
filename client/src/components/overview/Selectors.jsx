import React, { Fragment, useState, useRef } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  sizeControl: {
    margin: theme.spacing(1),
    minWidth: '65%',
  },
  quantControl: {
    margin: theme.spacing(1),
    minWidth: '25%',
  },
}));

const Selectors = props => {
  const classes = useStyles();
  console.log('props', props);

  const [currSize, setSize] = useState('');
  const [currQuant, setQuantity] = useState('');
  console.log('currSize', currSize);

  const handleChange = event => {
    setSize(event.target.value);
    setQuantity(props.skus[event.target.value]);
  };

  const renderItem = quantity => {
    let quantArr = [];
    if (quantity > 15) {
      quantity = 15;
    }
    for (let i = 0; i <= quantity; i++) {
      quantArr.push(i);
    }
    return quantArr;
  };

  console.log('currQuant', currQuant);
  return (
    <Fragment>
      <form className={classes.root} autoComplete="off">
        <FormControl
          variant="outlined"
          className={classes.sizeControl}
          required>
          <InputLabel htmlFor="outlined-size">Size</InputLabel>
          <Select
            value={currSize}
            onChange={handleChange}
            input={
              <OutlinedInput labelWidth={45} name="size" id="outlined-size" />
            }>
            <MenuItem value={'XS'}>XS</MenuItem>
            <MenuItem value={'S'}>S</MenuItem>
            <MenuItem value={'M'}>M</MenuItem>
            <MenuItem value={'L'}>L</MenuItem>
            <MenuItem value={'XL'}>XL</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.quantControl}>
          <InputLabel htmlFor="outlined-quant">Quantity</InputLabel>
          <Select
            value={currQuant}
            input={
              <OutlinedInput
                labelWidth={60}
                name="quantity"
                id="outlined-quant"
              />
            }>
            {renderItem(currQuant).map(number => (
              <MenuItem val={number}>{number}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </Fragment>
  );
};

export default Selectors;
