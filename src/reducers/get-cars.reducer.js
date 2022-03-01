import { CarsTypes } from '../containers/HomePage/types'

const INITIAL_STATE = {
  cars: [],
  isLoading: false,
}

const getCarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarsTypes.GET_CARS_START:
      return {
        ...state,
        isLoading: true,
      }
    case CarsTypes.GET_CARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cars: action.payload,
      }
    case CarsTypes.GET_CARS_FAIL:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
export default getCarsReducer
