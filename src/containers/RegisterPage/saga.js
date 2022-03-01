import { put, call, take } from 'redux-saga/effects';
import { RegisterTypes } from './types';
import { logInFail, logInSuccess } from '../LoginPage/action';
import { setError } from '../LoginPage/action'

export function* registerRequest(api, user) {
    try {
        const { data } = yield yield call(api.register, user.email, user.password, user.firstName, user.lastName)
        yield put(logInSuccess(data))
        yield put(setError('Logged in', 'success'))
    } catch (error) {
        yield put(logInFail())
        yield put(setError(error.message, 'error'))
    }
}

export function* registerStart(api) {
    while (true) {
        const user = yield take(RegisterTypes.REGISTER_START)
        yield call(registerRequest, api, user.payload)
    }
}
