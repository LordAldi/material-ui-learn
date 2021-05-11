import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MUIRadioGroup,
} from "@material-ui/core";
import React from "react";

const RadioGroup = ({ name, label, value, onChange, items }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MUIRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
