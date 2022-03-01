import { CarsTypes } from '../containers/HomePage/types'
const INITIAL_STATE = {
  isLoading: false,
  errorMsg: null,
  errorType: null,
}

const createCarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarsTypes.CREATE_CAR_START:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      }
    case CarsTypes.CREATE_CAR_SUCCESS:
      return {
        errorMsg: { message: 'Created succesfully' },
        errorType: 'success',
        isLoading: false,
      }
    case CarsTypes.CREATE_CAR_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
        errorType: 'error',
        isLoading: false,
      }

    default:
      return state
  }
}
export default createCarReducer
