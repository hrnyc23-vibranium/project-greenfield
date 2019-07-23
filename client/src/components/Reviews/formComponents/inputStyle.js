import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  titleError: {
    color: theme.palette.error.dark,
  },
  textField: {
    width: 400,
  },
  description: {
    marginTop: theme.spacing(1),
  },
}));
