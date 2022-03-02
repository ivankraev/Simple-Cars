import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Router
import { Route, Switch, Redirect } from 'react-router-dom'
// Style
import './App.scss'

import { redirect } from '../CustomRedirect/actions'

// Components
import SnackBar from '../../containers/helpers/SnackBar'
import HomePage from '../../containers/HomePage/HomePage'
import CustomRedirect from '../CustomRedirect/CustomRedirect'
import LoginPage from '../../containers/LoginPage/LoginPage'
import RegisterPage from '../../containers/RegisterPage/RegisterPage'
import NavBar from '../../containers/helpers/navigation/NavBar'
// TODO: IMPORT PAGES TO WHICH USER WILL BE REDIRECT

function App() {
  const userSessionInfo = useSelector((state) => state.login)
  const isUserLoggedIn = userSessionInfo.user
  const dispatch = useDispatch()
  let windowLocation = window.location
  let windowURL = windowLocation.pathname

  useEffect(() => {
    dispatch(redirect(''))
  }, [windowURL, dispatch])

  return (
    <div className="App">
      <SnackBar />
      <CustomRedirect />
      {isUserLoggedIn &&
      (windowURL === '/login' || windowURL === '/register') ? (
        <Redirect to="/cars" />
      ) : null}
      {windowURL !== '/login' && windowURL !== '/register' ? <NavBar /> : null}
      <Switch>
        <Route exact path="/cars" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Redirect push exact from="/" to="/login" />
      </Switch>
    </div>
  )
}

export default App
