import { CarsTypes } from '../containers/HomePage/types'
const INITIAL_STATE = {
  isLoading: false,
}

const editCarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarsTypes.EDIT_CAR_START:
      return {
        isLoading: true,
      }
    case CarsTypes.EDIT_CAR_SUCCESS:
      return {
        isLoading: false,

      }
    case CarsTypes.EDIT_CAR_FAIL:
      return {
        isLoading: false,
      }

    default:
      return state
  }
}
export default editCarReducer
