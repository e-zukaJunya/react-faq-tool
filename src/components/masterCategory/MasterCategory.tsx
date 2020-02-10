import { Button } from "@material-ui/core";
import React from "react";
import styles from "./kbApply.module.scss";

const MasterCategory: React.FC = (props: any) => {
  return (
    <div>
      <Button variant="contained" color="primary">
        更新
      </Button>
      <Button variant="contained" color="primary">
        ファイル出力
      </Button>
      <Button variant="contained" color="primary">
        ファイル取り込み
      </Button>
    </div>
  );
};

export default MasterCategory;
