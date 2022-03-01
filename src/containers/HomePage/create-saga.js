import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { createCarSuccess, createCarFail } from './action'

export function* createCarRequest(api, token, user, carData) {
  try {
    const { data } = yield call(api.editCar, token, user, carData)
    yield put(createCarSuccess(data))
  } catch (error) {
    yield put(createCarFail(error))
  }
}
export function* createCarStart(api) {
  while (true) {
    const newCarInfo = yield take(CarsTypes.CREATE_CAR_START)
    const { token, user, data } = newCarInfo.payload
    yield call(createCarRequest, api, token, user, data)
  }
}
