import { CircularProgress, Box } from '@mui/material'
import '../LoginPage/LoginForm.scss'
import React from 'react'

const CircularProgressBar = () => {
  return (
    <Box
      sx={{
        background: 'rgb(212,212,212,0.5)',
        zIndex: 10,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        top: 0,
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default CircularProgressBar
