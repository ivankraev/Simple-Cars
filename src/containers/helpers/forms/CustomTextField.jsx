import { useField } from "formik";
import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({ label, name, ...textFieldProps }) {
  const [field, meta] = useField(name);
  const helperText = meta.touched && meta.value !== "" ? meta.error : "";
  return (
    <TextField
      fullWidth
      label={label}
      size="medium"
      variant="outlined"
      required
      error={Boolean(meta.error) && Boolean(meta.touched) && meta.value !== ""}
      helperText={helperText}
      {...textFieldProps}
      {...field}
    />
  );
}
