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
    const auth = user && authPaths[path];
    const navbar = !authPaths[path];
    return { auth, navbar };
  }, [pathname, user]);

  useEffect(() => {
    redirect("");
  }, [pathname, redirect]);

  return (
    <div className="App">
      <SnackBar />
      <CustomRedirect />
      {showHandler.auth && <Redirect to="/cars" />}
      {showHandler.navbar && <NavBar />}
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
