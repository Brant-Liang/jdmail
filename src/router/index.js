import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home')
const Category = () => import('views/category/Category')
const ShoppingCart = () => import('views/shoppingCart/ShoppingCart')
const Mine = () => import('views/mine/Mine')
// 1、 安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: Home,
    component: Home
  },
  {
    path: '/category',
    name: Category,
    component: Category
  },
  {
    path: '/shoppingCart',
    name: ShoppingCart,
    component: ShoppingCart
  },
  {
    path: '/mine',
    name: Mine,
    component: Mine
  },
]
// 2、创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router