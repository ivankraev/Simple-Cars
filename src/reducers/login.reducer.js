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
        ...state,
        isLoading: false,
        user: action.payload,
      }
    case LogInTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
      }
    case RegisterTypes.REGISTER_START:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      }
    case LogInTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        errorMsg: null,
      }
    case LogInTypes.SET_ERROR:
      return {
        ...state,
        errorMsg: action.payload.msg,
        errorType: action.payload.errorType,

      }
    default:
      return state
  }
}
export default logInReducer
