import { Button } from "@material-ui/core";
import React from "react";
import styles from "./kbApply.module.scss";

const Train: React.FC = (props: any) => {
  return (
    <div>
      <Button variant="contained" color="primary">
        訓練開始
      </Button>
    </div>
  );
};

export default Train;
