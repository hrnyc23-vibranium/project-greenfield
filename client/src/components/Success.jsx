import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  checkMark: {
    width: 50,
    height: 50,
    color: green[500],
  },
}));

const Success = props => {
  const classes = useStyles();

  setTimeout(() => {
    props.handleClose();
  }, 1100);
  return (
    <DialogContent>
      <DialogTitle>Success</DialogTitle>
      <Box className={classes.root}>
        <CheckCircleOutline className={classes.checkMark} />
      </Box>
    </DialogContent>
  );
};

export default Success;
