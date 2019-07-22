import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
import { green } from '@material-ui/core/colors';

const variantIcon = {
  error: ErrorIcon,
  success: CheckCircleIcon,
};

const useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  success: {
    backgroundColor: green[600],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const MySnackbarContentWrapper = props => {
  const classes = useStyles();
  const { message, onClose, variant } = props;

  //select success or error icon
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  );
};

export const FormSnackbar = props => {
  const { open, handleClose, errors } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        variant={errors ? 'error' : 'success'}
        message={errors ? 'Missing required fields!' : 'Successfully Submitted'}
      />
    </Snackbar>
  );
};
