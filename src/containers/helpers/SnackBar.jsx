import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import { Alert } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { resetError } from '../LoginPage/action'
export default function SnackBar() {
  const dispatch = useDispatch()
  const { errorMsg, errorType } = useSelector((state) => state.login)

  const resetErr = () => {
    dispatch(resetError())
  }

  return (
    <Snackbar
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={!!errorMsg}
      onClose={resetErr}
      message="I love snacks"
      key={errorMsg}
      children={<Alert severity={errorType}>{errorMsg?.message}</Alert>}
    />
  )
}
