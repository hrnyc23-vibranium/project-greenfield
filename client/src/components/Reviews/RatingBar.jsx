import { lighten, withStyles, makeStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
  root: {
    height: 12,
    backgroundColor: lighten('#ff6c5c', 0.5),
    marginTop: '4px'
  },
  bar: {
    backgroundColor: '#ff6c5c'
  }
})(LinearProgress);

export default BorderLinearProgress;
