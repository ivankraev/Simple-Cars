import { put, call, take } from 'redux-saga/effects';
import { LogInTypes } from './types';
import { logInSuccess, logInFail } from './action';


export function* logInRequest(api, user) {
    try {
        const { data } = yield call(api.login, user.email, user.password)
        yield put(logInSuccess(data))
    } catch (error) {
        yield put(logInFail(error))
    }
}

export function* logInStart(api) {
    while (true) {
        const user = yield take(LogInTypes.LOGIN_START)
        yield call(logInRequest, api, user.payload)
    }
}

