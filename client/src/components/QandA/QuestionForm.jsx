//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { postQuestion } from '../../actions/QandA/postQuestion';

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
      name: '',
      email: '',
    };
  }
  render() {
    return (
      <Container>
        <Typography variant="h5">Ask Your Question</Typography>
        <Typography variant="subtitle1">
          About the {this.props.productName}
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
            value={this.state.question}
            onChange={e => {
              this.setState({ question: e.target.value });
            }}
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
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
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
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <Grid container justify="flex-end">
            <Button
              variant="contained"
              onClick={e => {
                event.preventDefault();
                this.props.postQuestion(
                  Object.assign({}, this.state, {
                    productId: this.props.productId,
                    productName: this.props.productName,
                  })
                );
              }}>
              submit
            </Button>
          </Grid>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    productId: state.productId,
    productName: state.product.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postQuestion: question => {
      dispatch(postQuestion(question));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsForm);
