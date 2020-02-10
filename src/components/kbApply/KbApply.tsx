import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import SwipeableViews from "react-swipeable-views";
import { Button } from "@material-ui/core";
import styles from "./kbApply.module.scss";

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
      <SwipeableViews
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStep}
      >
        <div>
          <Button variant="contained" color="primary">
            訓練開始
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary">
            現在のファイル出力
          </Button>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            className={styles.hidden}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              選択
            </Button>
          </label>
          <Button variant="contained" color="primary">
            テスト開始
          </Button>
        </div>
        <div>
          <Button variant="contained" color="secondary">
            公開
          </Button>
        </div>
      </SwipeableViews>
    </div>
  );
};

export default KbApply;
