import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextField,RadioGroup,FormControlLabel,Radio, FormLabel } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = {firstName:"",lastName:"",gender:"", email: "", password: "" };
const validationSchema = {
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("password is required"),
};
const Register = () => {
  const [gender, setGender] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (values) => {
    values.gender=gender;
    console.log("handle submit", values);
    dispatch(registerUserAction({data:values}))
  };
  const handleChange=(event)=>{
    setGender(event.target.value);
  }
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="firstName"
                placeholder="First Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="firstName"
                component={"div"}
                className="text-red-500"
              />
            </div>

            <div>
              <Field
                as={TextField}
                name="lastName"
                placeholder="Last Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="lastName"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div>
              <FormLabel id="Gender">Gender</FormLabel>
              <RadioGroup row onChange={handleChange}
                aria-labelledby="Gender"
                // defaultValue="female"
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <ErrorMessage name="gender" component="div" className="text-red-500"/>
              </RadioGroup>
            </div>
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-red-500"
              />
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-2 items-center justify-center pt-5">
          <p> already have an account ? </p>
          <Button onClick={()=>navigate("/login")}>Login</Button>
      </div>
    </>
  );
};

export default Register;
