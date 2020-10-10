import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create({
  baseURL: 'http://www.mei.com/appapi',
  timeout: 10000
})

// axios 拦截器？？？
// http.interceptors.request()
// http.interceptors.response()
// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent

  // 启动loading
  // 显示一个loading
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    overlay: true,
    loadingType: 'spinner',
    duration: 0
  })

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  Toast.clear()
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default http
