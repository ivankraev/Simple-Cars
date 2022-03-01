import { put, call, take } from 'redux-saga/effects';
import { RegisterTypes } from './types';
import { logInFail, logInSuccess } from '../LoginPage/action';


export function* registerRequest(api, user) {
    try {
        const { data } = yield yield call(api.register, user.email, user.password, user.firstName, user.lastName)
        yield put(logInSuccess(data))
    } catch (error) {
        yield put(logInFail(error))
    }
}

export function* registerStart(api) {
    while (true) {
        const user = yield take(RegisterTypes.REGISTER_START)
        yield call(registerRequest, api, user.payload)
    }
}
