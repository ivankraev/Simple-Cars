import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { resetError } from "../LoginPage/action";
export default function SnackBar() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.login.errorMsg);

  const resetErr = () => {
    dispatch(resetError());
  };

  return (
    <Snackbar
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={error}
      onClose={resetErr}
      message="I love snacks"
      key={error}
      children={<Alert severity="error">{error?.message}</Alert>}
    />
  );
}
