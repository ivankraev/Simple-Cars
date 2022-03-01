import React from "react";
import {Typography} from "@mui/material";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright ©    Simple Cars"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
