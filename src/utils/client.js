import Axios from 'axios'
const baseUrl = 'https://cars-apii.herokuapp.com/'
export const axios = Axios.create({ baseURL: baseUrl })
