import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@material-ui/core";
import React from "react";

const Select = ({ name, label, value, onChange, options }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MUISelect name={name} value={value} onChange={onChange} label={label}>
        <MenuItem value="">None</MenuItem>
        {options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          );
        })}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
