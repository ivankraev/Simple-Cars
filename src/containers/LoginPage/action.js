import { LogInTypes } from "./types";

export const logInStart = (data) => ({
    type: LogInTypes.LOGIN_START,
    payload: data
})

export const logInSuccess = user => ({
    type: LogInTypes.LOGIN_SUCCESS,
    payload: user
})
export const logInFail = error => ({
    type: LogInTypes.LOGIN_FAIL,
    payload: error
})
export const resetError = () => ({
    type: LogInTypes.ERROR_RESET,
})
export const logOutSuccess = () => ({
    type: LogInTypes.LOGOUT_SUCCESS,
});