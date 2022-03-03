import * as React from "react";
import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { routes } from "../../../utils/routes";
import { useAuthActions } from "../../../hooks/useActions";
import carLogo from "../../../resources/cars.png";
export default function NavBar() {
  const { redirect, logOutSuccess } = useAuthActions();
  const user = useSelector((state) => state.login.user);
  const logout = () => {
    logOutSuccess();
  };
  const login = () => {
    redirect(routes.auth.login);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#3f51b5",
          }}
        >
          <img src={carLogo} alt="" />
          <Box display="flex" flexDirection="column" sx={{ color: "#fafafa" }}>
            <Typography variant="body1">
              Welcome, {user ? user.username : "Guest"}
            </Typography>
            <Button color="inherit" onClick={user ? logout : login}>
              {user ? "sign out" : "sign in"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
