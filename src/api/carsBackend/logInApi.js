import { axios } from '../../utils/client'
import { LOGIN_SERVICE_URL } from './config'

export const api = {
  login: async function (username, password) {
    return await axios.post(LOGIN_SERVICE_URL, {
      username,
      password,
    })
  },
}
