import React from 'react';

//Material Components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  gridList: {
    // flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

const AnswerImages = ({ photos }) => {
  const classes = useStyles();
  return (
    <div>
      <GridList cellHeight={80} spacing={10} cols={6}>
        {photos.map(tile => (
          <GridListTile key={tile.id} cols={1}>
            <img src={tile.url} alt={tile.url} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default AnswerImages;
