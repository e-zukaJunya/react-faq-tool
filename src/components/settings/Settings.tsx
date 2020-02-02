import { Button } from "@material-ui/core";
import React from "react";
import { Props } from "./SettingsCont";
import Table from "./Table";

const Settings: React.FC<Props> = props => {
  return (
    <div>
      <Table data={props.settings} />
      <Button onClick={props.getSettings}>サーバーからデータとってくる</Button>
    </div>
  );
};

export default Settings;
