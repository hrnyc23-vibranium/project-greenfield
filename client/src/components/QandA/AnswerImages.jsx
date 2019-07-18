import React from 'react';

//Material Components
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

const AnswerImages = ({ photos }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={50} spacing={10} cols={5}>
        {photos.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.url} alt={tile.url} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default AnswerImages;
