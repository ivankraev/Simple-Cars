import { axios } from '../../utils/client'
import { CAR_SERVICE } from "./config";

export const api = {
  editCar: async function (token, user, data) {
    return axios.put(
      `${CAR_SERVICE}/${user.id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      }
    );
  },
};