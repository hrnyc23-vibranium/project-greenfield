import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  size: {
    marginTop: theme.spacing(2),
  },
  button: {
    borderRadius: 0,
    padding: '15px',
  },
  confirm: {
    color: 'green',
  },
}));

const CartButton = props => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ButtonGroup fullWidth className={classes.size}>
      <Button
        variant="outlined"
        disabled={props.status}
        className={classes.button}
        onClick={handleClick}>
        Add To Cart
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="cart-alert-title">
          {'Confirm Cart Selection'}
        </DialogTitle>
        <DialogContent id="cart-description">
          <Grid container direction="row">
            <Grid item xs={12} sm={2}>
              Your cart:
              <Typography variant="body1" gutterBottom>
                <strong>Price: </strong>
                {`$${props.price}`}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Grid
                container
                direction="column"
                justify="space-around"
                alignContent="space-around">
                <Typography variant="body1" gutterBottom>
                  <strong>Item: </strong>
                  {props.product.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Style: </strong>
                  {props.style}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Size: </strong>
                  {props.size}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Quantity: </strong>
                  {props.quantity}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={handleClose} className={classes.confirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </ButtonGroup>
  );
};

export default CartButton;
