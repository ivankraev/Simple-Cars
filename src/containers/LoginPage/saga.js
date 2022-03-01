import { put, call, take } from 'redux-saga/effects';
import { LogInTypes } from './types';
import { logInSuccess, logInFail } from './action';
import { setError } from '../LoginPage/action'

export function* logInRequest(api, user) {
    try {
        const { data } = yield call(api.login, user.email, user.password)
        yield put(logInSuccess(data))
        yield put(setError('Logged in', 'success'))
    } catch (error) {
        yield put(logInFail())
        yield put(setError(error.message, 'error'))
    }
}

export function* logInStart(api) {
    while (true) {
        const user = yield take(LogInTypes.LOGIN_START)
        yield call(logInRequest, api, user.payload)
    }
}

