import { Button } from "@material-ui/core";
import React from "react";
import styles from "./kbApply.module.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Test: React.FC = (props: any) => {
  const [value, setValue] = React.useState("既存に追加");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Button variant="contained" color="primary">
        現在のファイル出力
      </Button>
      <FormControl component="fieldset">
        <FormLabel component="legend">追加方法</FormLabel>
        <RadioGroup aria-label="gender" name="gender2" value={value} onChange={handleChange}>
          <FormControlLabel
            value="既存に追加"
            control={<Radio color="primary" />}
            label="既存に追加"
            labelPlacement="start"
          />
          <FormControlLabel
            value="全件入れ替え"
            control={<Radio color="primary" />}
            label="全件入れ替え"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        className={styles.hidden}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          ファイル選択
        </Button>
      </label>
      <Button variant="contained" color="primary">
        テスト開始
      </Button>
    </div>
  );
};

export default Test;
