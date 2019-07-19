import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  size: {
    marginTop: theme.spacing(2),
  },
  button: {
    borderRadius: 0,
    padding: '15px',
  },
}));

const CartButton = () => {
  const classes = useStyles();
  return (
    <ButtonGroup fullWidth className={classes.size}>
      <Button variant="outlined" className={classes.button}>
        Add To Cart
      </Button>
    </ButtonGroup>
  );
};

export default CartButton;
