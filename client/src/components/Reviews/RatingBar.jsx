import { withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
  root: {
    height: 12,
    backgroundColor: '#cfcfcf',
    marginTop: '4px'
  },
  bar: {
    backgroundColor: '#000042'
  }
})(LinearProgress);

export default BorderLinearProgress;
