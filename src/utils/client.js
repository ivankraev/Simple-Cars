import Axios from 'axios'
const baseUrl = 'https://moviedb-project2.herokuapp.com'
export const axios = Axios.create({ baseURL: baseUrl })