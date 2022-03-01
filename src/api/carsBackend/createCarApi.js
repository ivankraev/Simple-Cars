import { CAR_SERVICE } from './config'
import { axios } from '../../utils/client'
export const api = {
  createCar: async function (token, user, data) {
    const createdCar = { ...data, user }
    return axios.post(CAR_SERVICE, createdCar, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}
