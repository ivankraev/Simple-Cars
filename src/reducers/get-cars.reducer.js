import { CarsTypes } from '../containers/HomePage/types'
/** Store states
 * @constant {Object} */
const INITIAL_STATE = {
  cars: [],
  isLoading: false,
}
/** Get cars reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
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
