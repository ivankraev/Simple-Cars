import { CarsTypes } from './types'

export const getCarsStart = () => ({
  type: CarsTypes.GET_CARS_START,
})
export const getCarsSuccess = (cars) => ({
  type: CarsTypes.GET_CARS_SUCCESS,
  payload: cars,
})
export const getCarsFail = (error) => ({
  type: CarsTypes.GET_CARS_FAIL,
  payload: error,
})

export function createCarStart(token, data, user) {
  return {
    type: CarsTypes.CREATE_CAR_START,
    payload: {
      token,
      data,
      user,
    },
  }
}
export function createCarSuccess(newCar) {
  return {
    type: CarsTypes.CREATE_CAR_SUCCESS,
    payload: newCar,
  }
}
export function createCarFail(error) {
  return {
    type: CarsTypes.CREATE_CAR_FAIL,
    payload: error,
  }
}
export function deleteCarStart(carId, userId, token) {
  return {
    type: CarsTypes.REMOVE_CAR_START,
    payload: {
      carId,
      userId,
      token,
    },
  }
}
export function deleteCarSuccess() {
  return {
    type: CarsTypes.REMOVE_CAR_SUCCESS,
  }
}
export function deleteCarFail(error) {
  return {
    type: CarsTypes.REMOVE_CAR_FAIL,
    payload: error,
  }
}
export function editCarStart(token, user, data) {
  return {
    type: CarsTypes.EDIT_CAR_START,
    payload: {
      token,
      user,
      data,
    },
  }
}
export function editCarSuccess() {
  return {
    type: CarsTypes.EDIT_CAR_SUCCESS,
  }
}
export function editCarFail(error) {
  return {
    type: CarsTypes.EDIT_CAR_FAIL,
    payload: error,
  }
}
