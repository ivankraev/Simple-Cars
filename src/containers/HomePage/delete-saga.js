import { put, call, take } from 'redux-saga/effects'
import { CarsTypes } from './types'
import { deleteCarFail, getCarsSuccess } from './action'
import { setError } from '../LoginPage/action'

export function* deleteCarRequest(api, token, carData, cars) {
  const previousCars = cars.filter(car => car._id !== carData._id);
  try {
    const { data } = yield call(api.deleteCar, token, carData)
    console.log(data)
    yield put(getCarsSuccess([...previousCars]));
    yield put(setError('Car removed', 'success'))
  } catch (error) {
    yield put(deleteCarFail())
    yield put(setError(error.message, 'error'))
  }
}
export function* deleteCarStart(api) {
  while (true) {
    const newCarInfo = yield take(CarsTypes.REMOVE_CAR_START)
    const { token, data, cars } = newCarInfo.payload
    yield call(deleteCarRequest, api, token, data, cars)
  }
}
