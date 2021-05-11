import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmendId: "",
  hireDate: new Date(),
  isPermanent: false,
};
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />

          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            label="Gender"
            items={genderItems}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
