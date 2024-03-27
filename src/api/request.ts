import axios from "axios";

const service = axios.create({
  headers: {
    Accept: 'application/json'
  }
})

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service