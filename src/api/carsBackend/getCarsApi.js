import { axios } from '../../utils/client'
import { GET_CARS_SERVICE } from './config'

export const api = {
  cars: async function () {
    return axios.get(GET_CARS_SERVICE)
  },
}
