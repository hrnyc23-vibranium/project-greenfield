import React, { Fragment, useState } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
  },
}));

const getSteps = () => {
  return ['Shipping Info', 'Payment Info', 'Place Order'];
};

const getStepContent = stepIndex => {
  switch (stepIndex) {
    case 0:
      return 'Shipping Info';
    case 1:
      return 'Payment Info';
    case 2:
      return 'Place Order';
    default:
      return 'Unknown Step Index';
  }
};

const Checkout = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Checkout;
