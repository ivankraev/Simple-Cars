import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material'
import * as React from 'react'
import { logOutSuccess } from '../../LoginPage/action'
import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../../utils/routes'
import { redirect } from '../../../components/CustomRedirect/actions'
import carLogo from '../../../resources/cars.png'
export default function NavBar() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.login.user)
  const logout = () => {
    dispatch(logOutSuccess())
  }
  const login = () => {
    dispatch(redirect(routes.auth.login))
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            background: '#3f51b5',
          }}
        >
          <img src={carLogo} alt="" />
          <Box display="flex" flexDirection="column" sx={{ color: '#fafafa' }}>
            <Typography variant="body1">
              Welcome, {user ? user.username : 'Guest'}
            </Typography>
            <Button color="inherit" onClick={user ? logout : login}>
              {user ? 'sign out' : 'sign in'}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
