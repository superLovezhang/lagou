import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/detail/:id?',
    name: 'detail',
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '/myresume',
    name: 'myresume',
    component: () => import('@/views/MyResume.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('@/views/Delivery.vue')
  },
  {
    path: '/collections',
    name: 'collections',
    component: () => import('@/views/Collections.vue')
  },
  {
    path: '/company/:id',
    name: 'company',
    component: () => import('@/views/Company.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router