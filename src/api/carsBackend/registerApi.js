import { axios } from '../../utils/client'
import { REGISTER_SERVICE_URL } from './config'

export const api = {
  register: async function (firstname, lastname, username, password) {
    return axios.post(REGISTER_SERVICE_URL, {
      firstname,
      lastname,
      username,
      password,
    })
  },
}
