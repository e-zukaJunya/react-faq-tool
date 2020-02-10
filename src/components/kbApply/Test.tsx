import { Button } from "@material-ui/core";
import React from "react";
import styles from "./kbApply.module.scss";

const Test: React.FC = (props: any) => {
  return (
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
  );
};

export default Test;
