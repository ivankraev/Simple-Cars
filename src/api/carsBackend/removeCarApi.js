import { axios } from '../../utils/client'
import { CAR_SERVICE } from './config'

export const api = {
  deleteCar: async function (carId, userId, token) {
    axios.delete(`${CAR_SERVICE}/${carId}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
