/**
 * @desc
*/
import axios from 'axios'
import qs from 'qs'

// create an axios instance
const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.VUE_APP_BASE_API,
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// request interceptor
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('adminToken')
    // do something before request is sent
    if (token) {
      config.headers.token = token
    }

    config.data = qs.stringify(config.data)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // console.log(res)
    if (res.code !== 0) {
      if (localStorage.getItem('adminToken')) {
        if (res.code === 4 || res.code === 10) {

        }
      }
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default request
