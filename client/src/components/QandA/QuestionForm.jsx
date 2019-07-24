//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { postQuestion } from '../../actions/QandA/postQuestion';
import { validate } from '../validation';

//Material Componenets
import { makeStyles } from '@material-ui/core/styles';
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

//helper function for validation
//show all errors in a list
const renderErrors = errorList => {
  if (!errorList) {
    return;
  }
  return (
    <ul className="error">
      You must enter the following:
      {Object.values(errorList).map(err => {
        return (
          <li className="error" key={err}>
            {err}
          </li>
        );
      })}
    </ul>
  );
};

class QuestionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      name: '',
      email: '',
      errorList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    let errorList = validate(this.state, 'question', null);
    if (errorList) {
      this.setState({
        errorList: errorList,
      });
    }
  }

  handleSubmit() {
    let errorList = validate(this.state, 'question', null);
    if (errorList) {
      this.setState({
        errorList: errorList,
      });
    } else {
      let payload = Object.assign({}, this.state, {
        productId: this.props.productId,
        productName: this.props.productName,
      });
      this.props.postQuestion(payload);
    }
    //TODO handle async submittion
  }
  render() {
    return (
      <Container>
        <Typography variant="h5">Ask Your Question</Typography>
        <Typography variant="subtitle1">
          About the {this.props.productName}
        </Typography>
        {this.state.errorList ? renderErrors(this.state.errorList) : <div />}
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
              this.handleChange();
            }}
            error={this.state.errorList.question ? true : false}
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
              this.handleChange();
            }}
            error={this.state.errorList.name ? true : false}
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
              this.handleChange();
            }}
            error={this.state.errorList.email ? true : false}
          />
          <Grid container justify="flex-end">
            <Button
              variant="contained"
              onClick={e => {
                event.preventDefault();
                this.handleSubmit();
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
