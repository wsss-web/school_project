import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import New from '../views/new/news.vue'
import My from '../views/my/my.vue'
import Course from '../views/course/course.vue'
import Pay from '../views/pay/pay.vue'
import Login from '../views/login/login.vue'
import Register from '../views/login/register.vue'
import Phone from '../views/my/phone.vue'
import Name from '../views/my/name.vue'
import Modify from '../views/my/modify.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/news',
    name: 'news',
    component: New
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/my/phone',
    name: 'phone',
    component: Phone
  },
  {
    path: '/my/name',
    name: 'name',
    component: Name
  },
  {
    path: '/my/modify',
    name: 'modify',
    component: Modify
  },
  {
    path: '/course',
    name: 'course',
    component: Course
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
