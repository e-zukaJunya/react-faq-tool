import { Button } from "@material-ui/core";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// import { Props } from "./SettingsCont";
// import Table from "./Table";

const MasterOthers: React.FC = () => {
  const [name, setAge] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <FormControl>
        <Select value={name} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"ユーザー"}>ユーザー</MenuItem>
          <MenuItem value={"いろんな"}>いろんな</MenuItem>
          <MenuItem value={"DB"}>DB</MenuItem>
        </Select>
      </FormControl>
      {/* <Table
        data={props.settings}
        isLoading={props.isLoading}
        updateSettings={props.updateSettings}
      />
      <Button onClick={props.getSettings}>サーバーからデータとってくる</Button> */}
    </div>
  );
};

export default MasterOthers;
