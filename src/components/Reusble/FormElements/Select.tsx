import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { classes } from "./styles";

const SelectEl: React.FC = () => {
  const selectedValue = "first";
  return (
    <FormControl sx={classes.selectElFormControl} fullWidth>
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedValue}
        label=""
      >
        <MenuItem value={selectedValue}>Fenoh Store</MenuItem>
        <MenuItem value={111}>Fenoh Store2</MenuItem>
        <MenuItem value={222}>Fenoh Stroe3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectEl;
