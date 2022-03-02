import { CarsTypes } from '../containers/HomePage/types'
/** Store states
 * @constant {Object} */
const INITIAL_STATE = {
  isLoading: false,
}
/** Create car reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
const createCarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarsTypes.CREATE_CAR_START:
      return {
        ...state,
        isLoading: true,
      }
    case CarsTypes.CREATE_CAR_SUCCESS:
      return {
        isLoading: false,
      }
    case CarsTypes.CREATE_CAR_FAIL:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
export default createCarReducer
