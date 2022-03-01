import { axios } from '../../utils/client'
import { CAR_SERVICE } from './config'

export const api = {
  deleteCar: async function (token, user, data) {
    axios.delete(`${CAR_SERVICE}/${data.id}/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
