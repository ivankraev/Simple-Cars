import { CarsTypes } from '../containers/HomePage/types'
/** Store states
 * @constant {Object} */
const INITIAL_STATE = {
  isLoading: false,
}
/** Remove car reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
const removeCarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarsTypes.REMOVE_CAR_START:
      return {
        ...state,
        isLoading: true,
      }
    case CarsTypes.REMOVE_CAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case CarsTypes.REMOVE_CAR_FAIL:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
export default removeCarReducer
