//Dev Dependencies
import React, { useState, Fragment } from 'react';

//React Component
import ImageGallery from '../ImageGallery.jsx';
import { formatDate } from '../helpers.js';

//Material Componenets
import { Typography, Grid, Button } from '@material-ui/core';

const Answer = props => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Fragment>
      <Typography variant="body1">{props.answer.body} </Typography>
      {props.answer.photos.length > 0 ? (
        <ImageGallery photos={props.answer.photos} />
      ) : (
        <Fragment />
      )}

      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Typography variant="subtitle2">
          by{' '}
          <span
            className={
              props.answer.answerer_name.toLowerCase() == 'seller'
                ? 'seller'
                : ''
            }>
            {props.answer.answerer_name}
          </span>
          , {formatDate(props.answer.date)} | Helpful?
        </Typography>
        <Button
          // size="small"
          disabled={disabled}
          onClick={() => {
            props.voteAnswer(props.answer.answer_id);
            setDisabled(!disabled);
          }}>
          Yes ({+props.answer.helpfulness})
        </Button>
        <Typography component="h4"> | </Typography>
        <Button
          // size="small"
          onClick={() => {
            props.reportAnswer(props.answer.answer_id);
          }}>
          Report
        </Button>
      </Grid>
    </Fragment>
  );
};

export default Answer;
