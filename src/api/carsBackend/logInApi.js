import { axios } from '../../utils/client'
import { LOGIN_SERVICE_URL } from './config';

export const api = {
  login: async function (email, password) {
    return await axios.post(LOGIN_SERVICE_URL, {
      email,
      password,
    });
  },
};