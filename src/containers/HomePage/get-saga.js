import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { getCarsSuccess, getCarsFail } from './action'

export function* getCarsRequest(api) {
  try {
    const { data } = yield call(api.cars)
    yield put(getCarsSuccess(data))
  } catch (error) {
    yield put(getCarsFail(error))
  }
}
export function* getCarsStart(api) {
  while (true) {
    const user = yield take(CarsTypes.GET_CARS_START)
    yield call(getCarsRequest, api)
  }
}
