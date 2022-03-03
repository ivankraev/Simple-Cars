import { axios } from '../../utils/client'
import { CAR_SERVICE } from './config'

export const api = {
  deleteCar: async function (token, car) {
    return axios.delete(`${CAR_SERVICE}/${car._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
