import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { loginValidationSchema } from "../helpers/forms/schemas";
import { useAuthActions } from "../../hooks/useActions";
import { routes } from "../../utils/routes";
import "./LoginForm.scss";
import carLogo from "../../resources/cars.png";
import CustomForm from "../helpers/forms/CustomForm";
import CustomTextField from "../helpers/forms/CustomTextField";
import CustomSubmitButton from "../helpers/CustomSubmitButton";
import Copyright from "../helpers/Copyright";

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const loading = useSelector((state) => state.login.isLoading);
  const { logInStart } = useAuthActions();

  const loginSubmit = useCallback(
    (data) => {
      logInStart(data);
    },
    [logInStart]
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
              label="Username"
              name="username"
              required
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              type="password"
              name="password"
              label="Password"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CustomSubmitButton loading={loading} fullWidth label="sign in" />
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Link to={routes.auth.register} className="link">
              Don't have an account?
            </Link>
            <Link to={routes.cars} className="link">
              Continue to catalog
            </Link>
            <img src={carLogo} alt="" style={{ width: "50%", marginTop: 50 }} />
            <Copyright />
          </Grid>
        </Grid>
      </CustomForm>
    </Grid>
  );
};

export default LoginForm;
