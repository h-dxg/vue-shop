import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import 'lib-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.use(Vant);
Vue.config.productionTip = false
// 用钩子函数beforeEach()对路由进行判断

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
    if (store.state.login.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {    //如果没有权限,重定向到登录页,进行登录
      next({
        path: '/login',
      })
    }
  }
  else { //不需要权限 直接跳转
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
