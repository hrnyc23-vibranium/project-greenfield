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
import Box from '@material-ui/core/Box';

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
  price: {
    marginTop: theme.spacing(2),
  },
  imageBox: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(1),
  },
  img: {
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
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
            <Grid item xs={12} sm={3}>
              <Box className={classes.imageBox}>
                <img
                  src={props.image}
                  alt={props.product.name}
                  className={classes.img}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
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
          <Grid container direction="row" className={classes.price}>
            <Typography variant="h5" gutterBottom>
              <strong>Price: </strong>
              {`$${props.price}`}
            </Typography>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={handleClose} className={classes.confirm}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </ButtonGroup>
  );
};

export default CartButton;
