import { AppBar, Box, Toolbar, Button } from "@mui/material";
import * as React from "react";
import { logOutSuccess } from "../../LoginPage/action";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "../../../utils/routes";
import { redirect } from "../../../components/CustomRedirect/actions";
import carLogo from "../../../resources/cars.png";
export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const logout = () => {
    dispatch(logOutSuccess());
  };
  const login = () => {
    dispatch(redirect(routes.auth.login));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "lightblue",
          }}
        >
          <img src={carLogo} alt="" />
          <Button color="inherit" onClick={user ? logout : login}>
            {user ? "sign out" : "sign in"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
