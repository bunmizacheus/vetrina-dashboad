import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { classes } from "./styles";

const MonthSelector: React.FC = () => {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: { title: string }) => option.title,
  };

  return (
    <Autocomplete
      {...defaultProps}
      sx={classes.autoComplete}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          sx={classes.textField}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
    />
  );
};

export default MonthSelector;
const top100Films = [{ title: "This month" }, { title: "Last month" }];
