import axios from 'axios'

const DEFAULT_LANGUAGE = 'pl'

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept-Language': DEFAULT_LANGUAGE,
  },
})

export default axiosInstance
export * from 'axios'
