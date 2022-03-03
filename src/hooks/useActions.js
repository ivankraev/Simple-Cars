import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerStart } from '../containers/RegisterPage/action'
import * as CrudActions from '../containers/HomePage/action'
import * as AuthActions from '../containers/LoginPage/action'

//BINDING ACTIONS WITH DISPATCH SO WE DONT HAVE TO CALL IT EVERYWHERE

export const useCrudActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(CrudActions, dispatch)
}

export const useAuthActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({ ...AuthActions, registerStart }, dispatch)
}
