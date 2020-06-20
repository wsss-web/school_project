import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import New from '../views/news.vue'
import My from '../views/my.vue'
import Course from '../views/course.vue'
import Pay from '../views/pay.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index
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
    path: '/course',
    name: 'course',
    component: Course
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  }
]

const router = new VueRouter({
  routes
})

export default router
