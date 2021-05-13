import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, setValues, errors, setErrors, handleInputChange };
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const Form = ({ children, ...other }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
};

export { useForm, Form };
