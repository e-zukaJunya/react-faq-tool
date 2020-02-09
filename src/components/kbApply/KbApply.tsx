import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

function getSteps() {
  return ['訓練', 'テスト', '公開'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Step 1: 訓練';
    case 1:
      return 'Step 2: テスト';
    case 2:
      return 'Step 3: 公開';
    default:
      return 'Unknown step';
  }
}

const KbApply: React.FC = (props: any) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set<number>());
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  function isStepComplete(step: number) {
    return completed.has(step);
  }

  // const tabs = props.tabs.map((item: any, idx: number, ary: []) => <HoverMenu tab={item} key={idx} />);

  // タブ用アンカー
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
    </div>
  );
};

export default KbApply;
