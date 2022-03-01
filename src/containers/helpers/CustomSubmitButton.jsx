import { Button, CircularProgress } from "@mui/material";
import React from "react";
export default function CustomSubmitButton({
  label = "Submit",
  loading = false,
  loadingColor,
  ...props
}) {
  const guessColor = props.color === "primary" ? "secondary" : "primary";
  const progressColor = loadingColor ? loadingColor : guessColor;
  return (
    <Button
      type="submit"
      color="primary"
      variant="contained"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <CircularProgress color={progressColor} size="1.5rem" />
      ) : (
        label
      )}
    </Button>
  );
}
