import axios from '@/request/axios'


export function register (obj) {
  return axios({
    url: '/register/index',
    method: 'post',
    data: obj
  })
}

export function login (obj) {
  return axios({
    url: '/login/index',
    method: 'post',
    data: obj
  })
}