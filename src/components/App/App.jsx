import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// Router
import { Route, Switch, Redirect } from "react-router-dom";
// Style
import "./App.scss";
// Hooks
import { useAuthActions } from "../../hooks/useActions";
import { useLocation } from "react-use";
// Components
import {
  SnackBar,
  CustomRedirect,
  LoginPage,
  RegisterPage,
  NavBar,
  ErrorScreen,
  HomePage,
} from "../../containers/index";

function App() {
  const { user } = useSelector((state) => state.login);
  const { redirect } = useAuthActions();
  const { pathname } = useLocation();

  const noAuthForYou =
    user && (pathname === "/login" || pathname === "/register");
  const noNavBarForYou =
    pathname !== "/login" && pathname !== "/register" && pathname !== "/";

  useEffect(() => {
    redirect("");
  }, [pathname, redirect]);

  return (
    <div className="App">
      <SnackBar />
      <CustomRedirect />
      {noAuthForYou && <Redirect to="/cars" />}
      {noNavBarForYou && <NavBar />}
      <Switch>
        <Redirect push exact from="/" to="/login" />
        <Route exact path="/cars" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="*" component={ErrorScreen} />
      </Switch>
    </div>
  );
}

export default App;
