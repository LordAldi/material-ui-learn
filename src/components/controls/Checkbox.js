import {
  FormControl,
  FormControlLabel,
  Checkbox as MUICheckbox,
} from "@material-ui/core";
import React from "react";

const Checkbox = ({ name, label, onChange, value }) => {
  const convertToDefEventParameter = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MUICheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventParameter(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
