import { LogInTypes } from './types'

export const logInStart = (data) => ({
  type: LogInTypes.LOGIN_START,
  payload: data,
})

export const logInSuccess = (user) => ({
  type: LogInTypes.LOGIN_SUCCESS,
  payload: user
})
export const logInFail = () => ({
  type: LogInTypes.LOGIN_FAIL,
})
export const setError = (msg, errorType) => ({
  type: LogInTypes.SET_ERROR,
  payload: {
    msg,
    errorType
  }
})
export const logOutSuccess = () => ({
  type: LogInTypes.LOGOUT_SUCCESS,
})
