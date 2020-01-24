import TextField from "@material-ui/core/TextField";
import React from "react";

const MultilineTextField: React.FC = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="">
      <TextField
        id="standard-multiline-flexible"
        // label="Multiline"
        multiline
        rowsMax="4"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default MultilineTextField;
