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
import SearchGoods from '../views/SearchGoods.vue'

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
    path: '/detail',
    component: Detail
  },
  {
    path: '/goods',
    component: Goods
  },
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
    path: '/searchgoods/:name',
    component: SearchGoods
  },
  // {
  //   path: '*',
  //   redirect: '/recommend'
  // }
]

const router = new VueRouter({
  routes
})

export default router
