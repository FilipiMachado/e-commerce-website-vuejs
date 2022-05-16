import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserPage from '@/components/UserPage.vue'
import CartPage from '@/components/CartPage.vue'
import SingleProduct from '@/components/SingleProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage
  },
  {
    path: '/cartpage',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/single-product/:productid',
    name: 'SingleProduct',
    component: SingleProduct
  },
]

const router = new VueRouter({
  routes
})

export default router
