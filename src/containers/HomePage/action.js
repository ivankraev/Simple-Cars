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
export function createCarStart(token, user, data) {
  return {
    type: CarsTypes.CREATE_CAR_START,
    payload: {
      token,
      user,
      data,
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
export function deleteCarStart(token, data, cars) {
  return {
    type: CarsTypes.REMOVE_CAR_START,
    payload: {
      token,
      data,
      cars
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
export function editCarStart(token, id, data, cars) {
  return {
    type: CarsTypes.EDIT_CAR_START,
    payload: {
      token,
      id,
      data,
      cars
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
