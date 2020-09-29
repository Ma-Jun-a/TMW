import axios from 'axios'

// use3
export function request (config) {
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:5000',
      timeout: 5000
    })
  // axios的拦截器
  // instance.interceptors.r
    //响应拦截
    // instance.interceptors.response.use(res => {
    //   console.log(res.data)
    //   return res.data
    // }), err => {
    //   console.log(err)
    // }
    //    发送真正的网络请求
    return instance(config)

}
export default request
// 使用同2

// use2
// export function request (config) {
//   return new Promise((resolve,reject) => {
//     const instance = axios.create({
//       baseURL: '',
//     })
//     instance (config).then(
//       response => {
//         resolve(response)
//       }
//     ).catch(error => {
//       reject(error)
//     })
//   })
// }
//使用
// request({
//   url: '',
//   method: '',
// }).then(response => {
//   console.log('scu')
// }).catch(error => {
//   console.log('errormsg')
// })

// use1
// export function request (config) {
//   const instance1 = axios.create({
//     baseURL:'',
//     method:'',
//   })
//
//   // const instance2 = axios.create({
//   //
//   // })
// }
// 调用
// request({
//   url: '/config',
// },res => {
//   console.log('scucc')
// },(failer) => {
//   console.log('failer ')
// })
