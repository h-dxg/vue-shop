import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home = () => import('@/views/home/home.vue')
const sort = () => import('@/views/sort/sort.vue')
const CategoryMain = () => import('@/views/sort/main.vue')
const car = () => import('@/views/car/car.vue')
const user = () => import('@/views/user/user.vue')
const detail = () => import('@/views/detail/detail.vue')
const pay = () => import('@/views/pay/pay.vue')
const login = () => import('@/views/user/login.vue')
const register = () => import('@/views/user/register.vue')





const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'home'
  },
  // 首页
  {
    path: '/home',
    component: home,
    name: 'home'
  },
  // 商品分类
  {
    path: '/sort',
    redirect: '/category/all',
    component: sort,
    name: 'sort',
    children: [{
      path: '/category/:id',
      component: CategoryMain
    }]
  },
  // 购物车
  {
    path: '/car',
    name: 'car',
    component: car,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
    },
  },
  // 订单支付页面
  {
    path: '/car/pay',
    name: 'pay',
    component: pay
  },
  // 个人中心
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
    },
  },
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  // 注册页
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  // 商品详情页
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
]
const router = new VueRouter({
  routes,
  mode: 'history',
  //  vuex的严格模式
  strict: process.env.NODE_ENV !== 'production',
  // 这个整体做的是：在路由的history模式下，一些列表页利用缓存模式来记录位置（一般是返回不刷新，前进刷新）,一般用了scrollBehavior，
  //同时还用keep-alive(缓存),activated(缓存下触发的钩子)配合做列表页的返回记录位置。缓存模式也有坑，就是何时清除缓存，一般是从新进入页面就清除。
  //回到主题，滚动行为就是：例如一个列表页，滑动了很多，点进去、再返回记录刚刚的位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

export default router
