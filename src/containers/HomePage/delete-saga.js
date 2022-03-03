import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { deleteCarSuccess, deleteCarFail, getCarsStart } from './action'
import { setError } from '../LoginPage/action'

export function* deleteCarRequest(api, token, car) {
  try {
    const { data } = yield call(api.deleteCar, token, car)
    yield put(deleteCarSuccess(data))
    yield put(getCarsStart())
    yield put(setError('Car removed', 'success'))
  } catch (error) {
    yield put(deleteCarFail())
    yield put(setError(error.message, 'error'))
  }
}
export function* deleteCarStart(api) {
  while (true) {
    const newCarInfo = yield take(CarsTypes.REMOVE_CAR_START)
    const { car, token } = newCarInfo.payload
    yield call(deleteCarRequest, api, token, car)
  }
}
