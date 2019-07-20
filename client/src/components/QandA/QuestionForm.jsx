//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { postQuestions } from '../../actions/QandA/getQuestions';

//React Components
import Question from './Question';

//Material Componenets
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Container,
  Box,
  InputLabel,
  TextField,
  Button,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

class QuestionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      productname: 'placeholder',
      productid: '',
      helpertext: 'helper for question body',
    };
  }
  render() {
    return (
      <Container>
        <Typography variant="h5">Ask Your Question</Typography>
        <Typography variant="subtitle1">
          About the {this.state.productname}
        </Typography>
        <form>
          <TextField
            id="questionarea"
            type="textarea"
            multiline
            required
            inputProps={{ maxLength: 1000 }}
            label="Your Question"
            helperText="place your question here"
            fullWidth
            questiontext={this.state.question}
          />
          <TextField
            id="nickename"
            type="input"
            required
            fullWidth
            label="What is your nickname"
            placeholder="Example: jackson11!"
            helperText="For privacy reason, do not use your full name or email address"
            inputProps={{ maxLength: 60 }}
          />
          <TextField
            id="questionEmail"
            type="input"
            required
            fullWidth
            label="Your email"
            placeholder="Why did you like the product or not?"
            helperText="For authentication reasons, you will not be emailed"
            inputProps={{ maxLength: 60 }}
          />
          <Grid container justify="flex-end">
            <Button
              variant="contained"
              onClick={e => {
                event.preventDefault();
              }}>
              submit
            </Button>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default QuestionsForm;
