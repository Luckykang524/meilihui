import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart.vue'
import Center from '../views/Center.vue'
import Detail from '../views/Detail.vue'
import Goods from '../views/Goods.vue'
import Login from '../views/Login.vue'
import Man from '../views/Man.vue'
import Woman from '../views/Woman.vue'
import Oversea from '../views/Oversea.vue'
import Recommend from '../views/Recommend.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/goods/:categoryid',
    component: Goods
  },
  {
    path: '/goods/:categoryid/:goodsid',
    name: 'Detail',
    component: Detail
  },
  // 第二种办法--不常用
  /* {
    path:'/detail',
    name:'Detail',
    component:Detail
  }, */
  {
    path: '/login',
    component: Login
  },
  {
    path: '/man',
    component: Man
  },
  {
    path: '/oversea',
    component: Oversea
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/woman',
    component: Woman
  },
  {
    path: '*',
    redirect: '/recommend'
  }
]

const router = new VueRouter({
  routes
})

export default router
