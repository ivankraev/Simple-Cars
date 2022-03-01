import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { loginValidationSchema } from "../helpers/forms/schemas";
import { routes } from "../../utils/routes";
import { logInStart } from "./action";
import "./LoginForm.scss";
import carLogo from "../../resources/cars.png";
import CustomForm from "../helpers/forms/CustomForm";
import CustomTextField from "../helpers/forms/CustomTextField";
import CustomSubmitButton from "../helpers/CustomSubmitButton";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.login?.isLoading);

  const loginSubmit = useCallback(
    (data) => {
      dispatch(logInStart(data));
    },
    [dispatch]
  );

  return (
    <Grid container direction="column" component="section">
      <CustomForm
        onSubmit={loginSubmit}
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              type="text"
              label="Email"
              name="email"
              required
              autoFocus
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              type="password"
              name="password"
              label="Password"
              required
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomSubmitButton loading={isLoading} fullWidth label="sign in" />
          </Grid>
          <Grid
            item
            xs={12}
            alignItems="center"
            flexDirection="column"
            display="flex"
          >
            <Link to={routes.auth.register} className="link">
              Don't have an account?
            </Link>
            <Link to={routes.cars} className="link">
              Continue to catalog
            </Link>
            <img
              src={carLogo}
              alt=""
              style={{ width: "50%", marginTop: "50px" }}
            />
          </Grid>
        </Grid>
      </CustomForm>
    </Grid>
  );
};

export default LoginForm;
