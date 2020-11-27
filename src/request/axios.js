import axios from 'axios'
import store from '@/store' // progress bar style
// import qs from 'qs'


axios.defaults.baseURL = '' // 配置接口地址
axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 

    if (config.url === '/register/index' || config.url === '/login/index') {
      return config;
    } else {
      const token = store.state.token;
      console.log(token, 'token')
      token && (config.headers.Authorization = token);
      return config;
    }
  },
  error => {
    return Promise.error(error);
  })
// HTTPresponse拦截
axios.interceptors.response.use(response => {
  const status = Number(response.status) || 200
  if (status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}), error => {
  return Promise.reject(new Error(error))
}


export default axios
