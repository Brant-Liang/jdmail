import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home')
const Category = () => import('views/category/Category')
const ShoppingCart = () => import('views/shoppingCart/ShoppingCart')
const Mine = () => import('views/mine/Mine')
const Detail = () => import('views/detail/Detail')
// 1、 安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
  },
]
// 2、创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router