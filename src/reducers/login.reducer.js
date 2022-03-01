import { LogInTypes } from '../containers/LoginPage/types'
import { RegisterTypes } from '../containers/RegisterPage/types'
const INITIAL_STATE = {
  isLoading: false,
  user: null,
  errorMsg: null,
  errorType: null,
}

const logInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LogInTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      }
    case LogInTypes.LOGIN_SUCCESS:
      return {
        errorMsg: { message: 'Logged in' },
        errorType: 'success',
        isLoading: false,
        user: action.payload,
      }
    case LogInTypes.LOGIN_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
        errorType: 'error',
        isLoading: false,
      }
    case RegisterTypes.REGISTER_START:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      }
    case LogInTypes.ERROR_RESET:
      return {
        ...state,
        errorMsg: null,
      }
    case LogInTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        errorMsg: null,
      }
    default:
      return state
  }
}
export default logInReducer
