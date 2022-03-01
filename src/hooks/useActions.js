import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CrudActions from '../containers/HomePage/action'
import * as AuthActions from '../containers/LoginPage/action'
export const useCrudActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(CrudActions, dispatch)
}

export const useAuthActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AuthActions, dispatch)
}
