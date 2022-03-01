import { Form, Formik } from "formik";
import React from "react";

export default function CustomForm({ children, ...formProps }) {
  return (
    <>
      <Formik {...formProps}>
        <Form>{children}</Form>
      </Formik>
    </>
  );
}
