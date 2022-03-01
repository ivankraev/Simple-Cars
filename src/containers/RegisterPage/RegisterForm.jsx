import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { registerValidationSchema } from "../helpers/forms/schemas";
import { useAuthActions } from "../../hooks/useActions";
import { routes } from "../../utils/routes";
import "../LoginPage/LoginForm.scss";
import CustomSubmitButton from "../helpers/CustomSubmitButton";
import CustomTextField from "../helpers/forms/CustomTextField";
import CustomForm from "../helpers/forms/CustomForm";
import Copyright from "../helpers/Copyright";
const initialValues = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
};

const LoginForm = () => {
  const loading = useSelector((state) => state?.login?.isLoading);
  const { registerStart } = useAuthActions();

  const loginSubmit = useCallback(
    (data) => {
      registerStart(data);
    },
    [registerStart]
  );

  return (
    <Grid container direction="column" component="section">
      <CustomForm
        onSubmit={loginSubmit}
        initialValues={initialValues}
        validationSchema={registerValidationSchema}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Sign up</Typography>
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              type="text"
              name="firstname"
              label="First name"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField type="text" name="lastname" label="Last name" />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField type="text" name="email" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField type="password" name="password" label="Password" />
          </Grid>
          <Grid item xs={12}>
            <CustomSubmitButton loading={loading} fullWidth label="register" />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <span>
              Already have an account?
              <Link to={routes.auth.login} className="link">
                {" "}
                Sign in
              </Link>
            </span>
            <br /> <br /> <br />
            <Copyright />
          </Grid>
        </Grid>
      </CustomForm>
    </Grid>
  );
};

export default LoginForm;
