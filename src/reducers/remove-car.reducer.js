import { CarsTypes } from '../containers/HomePage/types'

const INITIAL_STATE = {
  isLoading: false,
  errorMsg: null,
  errorType: null,
}

const removeCarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarsTypes.REMOVE_CAR_START:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      }
    case CarsTypes.REMOVE_CAR_SUCCESS:
      return {
        errorMsg: { message: 'Removed succesfully' },
        errorType: 'success',
        isLoading: false,
      }
    case CarsTypes.REMOVE_CAR_FAIL:
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
export default removeCarReducer
