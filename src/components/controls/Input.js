import { TextField } from "@material-ui/core";

const Input = ({ name, label, value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
