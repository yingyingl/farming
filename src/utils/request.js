/**
 * @desc
*/
import axios from 'axios'
import qs from 'qs'
import * as utils from '@/utils/utils'

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
      if (utils.getToken()) {
        // Message({
        //   message: res.message || 'Error',
        //   type: 'error',
        //   duration: 5 * 1000
        // })

        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        if (res.code === 4 || res.code === 10) {
          // to re-login
          // MessageBox.confirm('您的登录已过期, 请重新登录',
          // '登录已过期', {
          //   confirmButtonText: '确定',
          //   type: 'warning',
          //   showCancelButton: false
          // }).then(() => {
          //   store.dispatch('user/resetToken').then(() => {
          //     location.reload()
          //   })
          // }).catch(() => {
          //   store.dispatch('user/resetToken').then(() => {
          //     location.reload()
          //   })
          // })
        }
      }
      // return Promise.reject(new Error(res.message || 'Error'))
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })

    return Promise.reject(error)
  }
)

export default request
