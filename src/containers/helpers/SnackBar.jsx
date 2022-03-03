import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { useAuthActions } from "../../hooks/useActions";

export default function SnackBar() {
  const { setError } = useAuthActions();
  const { errorMsg, errorType } = useSelector((state) => state.login);

  const resetErr = () => {
    setError(null);
  };

  return (
    <Snackbar
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={!!errorMsg}
      onClose={resetErr}
      message="I love snacks"
      key={errorMsg}
      children={
        <Alert variant="outlined" severity={errorType}>
          {errorMsg}
        </Alert>
      }
    />
  );
}
