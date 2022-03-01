import { Container, Zoom } from "@mui/material";
import RegisterForm from "./RegisterForm";
import React from "react";

const registerForm = (
  <Container maxWidth="xs" className="logInWrapper">
    <RegisterForm />
  </Container>
);

const RegisterPage = () => {
  return (
    <>
      <Container className="logInContainer" maxWidth={false}>
        <Zoom in={true}>{registerForm}</Zoom>
      </Container>
    </>
  );
};

export default RegisterPage;
