import axios from '@/request/axios'


export function getPic (obj) {
  return axios({
    url: '/swipe/index',
    method: 'get',
    params: obj
  })
}

