import { CarsTypes } from '../containers/HomePage/types'
/** Store states
 * @constant {Object} */
const INITIAL_STATE = {
  isLoading: false,
}
/** Edit car reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
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
