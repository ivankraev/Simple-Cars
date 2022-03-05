import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { editCarFail, getCarsSuccess } from './action'
import { setError } from '../LoginPage/action'
export function* editCarRequest(api, token, id, carData, cars) {
  const previousCars = cars.filter(car => car._id !== id);
  try {
    const { data } = yield call(api.editCar, token, id, carData)
    yield put(getCarsSuccess([data, ...previousCars]));
    yield put(setError('Car updated', 'success'))
  } catch (error) {
    yield put(editCarFail())
    yield put(setError(error.message, 'error'))
  }
}
export function* editCarStart(api) {
  while (true) {
    const newCarInfo = yield take(CarsTypes.EDIT_CAR_START)
    const { token, id, data, cars } = newCarInfo.payload
    yield call(editCarRequest, api, token, id, data, cars)
  }
}
