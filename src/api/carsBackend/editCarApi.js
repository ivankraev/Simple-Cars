import { axios } from '../../utils/client'
import { CAR_SERVICE } from './config'

export const api = {
  editCar: async function (token, id, data) {
    return axios.put(`${CAR_SERVICE}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
