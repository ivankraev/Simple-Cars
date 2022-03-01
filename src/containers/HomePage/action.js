import { CarsTypes } from './types'

//GET CARS SERVICE
export const getCarsStart = () => ({
  type: CarsTypes.GET_CARS_START,
})
export const getCarsSuccess = (cars) => ({
  type: CarsTypes.GET_CARS_SUCCESS,
  payload: cars,
})
export const getCarsFail = () => ({
  type: CarsTypes.GET_CARS_FAIL,
})
//CREATE CAR SERVICE
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
export function createCarSuccess() {
  return {
    type: CarsTypes.CREATE_CAR_SUCCESS,
  }
}
export function createCarFail() {
  return {
    type: CarsTypes.CREATE_CAR_FAIL,
  }
}
//DELETE CAR SERVICE
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
export function deleteCarFail() {
  return {
    type: CarsTypes.REMOVE_CAR_FAIL,
  }
}
//EDIT CAR SERVICE
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
export function editCarFail() {
  return {
    type: CarsTypes.EDIT_CAR_FAIL,
  }
}
