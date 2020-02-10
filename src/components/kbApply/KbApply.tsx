import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import SwipeableViews from "react-swipeable-views";
import { Button } from "@material-ui/core";
import styles from "./kbApply.module.scss";
import Publish from "./Publish";
import Train from "./Train";
import Test from "./Test";

const KbApply: React.FC = (props: any) => {
  const steps = ["訓練", "テスト", "公開"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set<number>());
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const isStepComplete = (step: number) => {
    return completed.has(step);
  };

  return (
    <div className="">
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const buttonProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <SwipeableViews
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStep}
      >
        <Train />
        <Test />
        <Publish />
      </SwipeableViews>
    </div>
  );
};

export default KbApply;
