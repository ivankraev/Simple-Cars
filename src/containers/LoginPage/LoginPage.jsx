import React from "react";
import { Container, Zoom } from "@mui/material";
import LoginForm from "./LoginForm";

const logInForm = (
  <Container maxWidth="xs" className="logInWrapper">
    <LoginForm />
  </Container>
);

const LoginPage = () => {
  return (
    <>
      <Container className="logInContainer" maxWidth={false}>
        <Zoom in={true}>{logInForm}</Zoom>
      </Container>
    </>
  );
};
export default LoginPage;
