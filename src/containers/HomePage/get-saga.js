import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { getCarsSuccess, getCarsFail } from './action'
import { setError } from '../LoginPage/action'

export function* getCarsRequest(api) {
  try {
    const { data } = yield call(api.cars)
    yield put(getCarsSuccess(data))
  } catch (error) {
    yield put(getCarsFail())
    yield put(setError(error.message, 'error'))
  }
}
export function* getCarsStart(api) {
  while (true) {
    yield take(CarsTypes.GET_CARS_START)
    yield call(getCarsRequest, api)
  }
}
