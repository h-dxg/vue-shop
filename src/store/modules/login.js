/**
 * @author wangmengjie
 * @date 2020/4/22 11.59
 * @Desc 分类菜单index
 */
import { setLocal, getLocal } from '@/util/util'
const login = {
  state: {
    token: ''
  },

  mutations: {
    CHANGE_TOKEN: (state) => {
      state.token = getLocal('token')
    }
  },

  actions: {
    //  存token
    setToken ({ commit }, res) {
      const token = res
      setLocal(token, 'token');
      commit('CHANGE_TOKEN');
    },
    // 清空token
    clearToken ({ commit }) {
      const token = ''
      setLocal(token, 'token');
      commit('CHANGE_TOKEN');
    },
  }
}

export default login
