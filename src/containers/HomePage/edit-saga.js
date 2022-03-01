import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { editCarSuccess, editCarFail } from './action'
import { setError } from '../LoginPage/action'
export function* editCarRequest(api, token, user, carData) {
  try {
    const { data } = yield call(api.editCar, token, user, carData)
    yield put(editCarSuccess(data))
    yield put(setError('Car updated', 'success'))
    yield take(CarsTypes.GET_CARS_START)
  } catch (error) {
    yield put(editCarFail())
    yield put(setError(error.message, 'error'))
  }
}
export function* editCarStart(api) {
  while (true) {
    const newCarInfo = yield take(CarsTypes.EDIT_CAR_START)
    const { token, user, data } = newCarInfo.payload
    yield call(editCarRequest, api, token, user, data)
  }
}
