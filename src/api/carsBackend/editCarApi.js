import { axios } from '../../utils/client'
import { CAR_SERVICE } from './config'

export const api = {
  editCar: async function (token, user, data) {
    return axios.put(`${CAR_SERVICE}/${user._id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
