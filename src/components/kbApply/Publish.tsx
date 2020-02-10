import { Button } from "@material-ui/core";
import React from "react";
import styles from "./kbApply.module.scss";

const Publish: React.FC = (props: any) => {
  return (
    <div>
      <Button variant="contained" color="secondary">
        公開
      </Button>
    </div>
  );
};

export default Publish;
