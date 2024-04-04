import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const steps = ["Viewing cart", "Filling in your details", "Payment"];

function Checkout() {
  const [step2Validation, setStep2Validation] = React.useState(false);
  const [step3Validation, setStep3Validation] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (e) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button style={{display: activeStep === steps.length - 1 ? "none" : "block"}}
              disabled={activeStep > 0 && !step2Validation}
              id="next"
              onClick={handleNext}
            >
              Next
              {/* {activeStep === steps.length - 1 ? "Finish" : "Next"} */}
            </Button>

            <Button style={{display: activeStep === steps.length - 1 ? "block" : "none"}}
              disabled={activeStep > 0 && !step3Validation}
              id="next"
              onClick={handleNext}
            >
              Finish
              {/* {activeStep === steps.length - 1 ? "Finish" : "Next"} */}
            </Button>

          </Box>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
            {activeStep === 0 && <Step1 />}
            {activeStep === 1 && <Step2 value={setStep2Validation} id="step2" />}
            {activeStep === 2 && <Step3 value={setStep3Validation}/>}
          </Typography>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Checkout;
