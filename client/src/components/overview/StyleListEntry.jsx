import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';

const StyleListEntry = props => {
  return (
    <Fragment>
      {props.photos.map(photo => (
        <GridListTile key={photo.url} cols={1}>
          <img src={photo.thumbnail_url} />
        </GridListTile>
      ))}
    </Fragment>
  );
};

export default StyleListEntry;
