import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { deleteCarSuccess, deleteCarFail } from './action'

export function* deleteCarRequest(api, carId, userId, token) {
  try {
    const { data } = yield call(api.deleteCar, carId, userId, token)
    yield put(deleteCarSuccess(data))
  } catch (error) {
    yield put(deleteCarFail(error))
  }
}
export function* deleteCarStart(api) {
  while (true) {
    const newCarInfo = yield take(CarsTypes.REMOVE_CAR_START)
    const { carId, userId, token } = newCarInfo.payload
    yield call(deleteCarRequest, api, carId, userId, token)
  }
}
