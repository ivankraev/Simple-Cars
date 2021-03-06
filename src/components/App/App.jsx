import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
// Router
import { Route, Switch, Redirect } from "react-router-dom";
// Style
import "./App.scss";
// Hooks
import { useAuthActions } from "../../hooks/useActions";
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

const authPaths = { login: 1, register: 2 };

function App() {
  const { user } = useSelector((state) => state.login);
  const { redirect } = useAuthActions();
  const { pathname } = window.location;

  const showHandler = useMemo(() => {
    const path = pathname.slice(1);
    const isAuth = user && authPaths[path];
    const isNavbarVisible = !authPaths[path];
    return { isAuth, isNavbarVisible };
  }, [pathname, user]);

  useEffect(() => {
    redirect("");
  }, [pathname, redirect]);

  return (
    <div className="App">
      <SnackBar />
      <CustomRedirect />
      {showHandler.isAuth && <Redirect to="/cars" />}
      {showHandler.isNavbarVisible && <NavBar />}
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
