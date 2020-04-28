//store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import tabIndex from './modules/tabIndex'
import detail from './modules/detail'
import login from './modules/login'



export default new Vuex.Store({
  modules: {
    tabIndex,
    detail,
    login
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})