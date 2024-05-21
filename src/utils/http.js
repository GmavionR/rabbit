//axios基础的封装
import axios from 'axios'
import {useUserStore} from '@/stores/user.js'


const http = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

//拦截器
// axios请求拦截器
http.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  http.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
  })




1
//拦截器
// axios请求拦截器
// http.interceptors.request.use(config => {
//   return config
// }, e => Promise.reject(e))

// // axios响应式拦截器
// http.interceptors.response.use(res => res.data, e => {
//   return Promise.reject(e)
// })

2

// // 添加请求拦截器
// http.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });

// // 添加响应拦截器
// http.interceptors.response.use(function (response) {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });



export default http