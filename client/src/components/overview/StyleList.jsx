import React from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
}));

const StyleList = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} cols={3}>
        {props.styles.results ? (
          props.styles.results[0].photos.map(photo => (
            <GridListTile key={photo.url} cols={1}>
              <img src={photo.thumbnail_url} />
            </GridListTile>
          ))
        ) : (
          <CircularProgress />
        )}
      </GridList>
    </div>
  );
};

export default StyleList;
