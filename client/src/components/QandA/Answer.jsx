//Dev Dependencies
import React from 'react';

//React Component
import ImageGallery from '../ImageGallery.jsx';
import { formatDate } from '../formatDate.js';

//Material Componenets
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Answer = props => {
  return (
    <Box>
      <Typography variant="body2">{props.answer.body} </Typography>
      {props.answer.photos.length > 0 ? (
        <ImageGallery photos={props.answer.photos} />
      ) : (
        <Box />
      )}

      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Typography variant="caption">
          by{' '}
          <span
            className={props.answer.answerer_name == 'seller' ? 'seller' : ''}>
            {props.answer.answerer_name}
          </span>
          , {formatDate(props.answer.date)} | Helpful?
        </Typography>
        <Button size="small">Yes ({+props.answer.helpfulness})</Button>
        <Typography component="h4"> | </Typography>
        <Button size="small">Report</Button>
      </Grid>
    </Box>
  );
};

export default Answer;
