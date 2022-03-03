import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { createCarSuccess, createCarFail, getCarsStart } from './action'
import { setError } from '../LoginPage/action'

export function* createCarRequest(api, token, user, carData) {
  try {
    const { data } = yield call(api.createCar, token, user, carData)
    yield put(createCarSuccess(data))
    yield put(getCarsStart())
    yield put(setError('Car created', 'success'))
  } catch (error) {
    yield put(createCarFail())
    yield put(setError(error.message, 'error'))
  }
}
export function* createCarStart(api) {
  while (true) {
    const newCarInfo = yield take(CarsTypes.CREATE_CAR_START)
    const { token, user, data } = newCarInfo.payload
    yield call(createCarRequest, api, token, user, data)
  }
}
