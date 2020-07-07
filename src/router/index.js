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
import Card from '../views/my/card.vue'
import Forget from '../views/login/forget.vue'
import newword from '../views/login/new_word.vue'
import Mail from '../views/my/mail.vue'
import Tripartite from '../views/my/tripartite.vue'
import Information from '../views/my/information .vue'
import newAtical from '../views/new/newAtical.vue'
import payment from '../views/pay/payment.vue'
import newphone from '../views/my/newphone.vue'
import aircondition from '../views/pay/aircondition.vue'
import Timetable from '../views/course/timetable.vue'
import Courses from '../views/course/courses.vue'
import Evaluate from '../views/course/evaluate.vue'
import Cname from '../views/course/Cname.vue'
import Details from '../views/course/details.vue'
import Allcourse from '../views/course/allcourse.vue'
import Titlename from '../views/course/titlename.vue'
import immediately from '../views/pay/immediately.vue'
import success from '../views/pay/success.vue'
import book from '../views/home/book.vue'
const kefu = () => import('../views/home/kefu.vue')
const lbt = () => import('../views/home/lbt.vue')
const lbt2 = () => import('../views/home/lbt2.vue')
const lbt3 = () => import('../views/home/lbt3.vue')
const jkbb = () => import('../views/home/jkbb.vue')
const xyzn = () => import('../views/home/xyzn.vue')
const jcxy = () => import('../views/home/jcxy.vue')
const stfc = () => import('../views/home/stfc.vue')
const gengduo = () => import('../views/home/gengduo.vue')
const xyzk = () => import('../views/home/xyzk.vue')
const zhcx = () => import('../views/home/zhcx.vue')
const dier = () => import('../views/home/dier.vue')
const hhhh = () => import('../views/home/hhhh.vue')
const dlzn = () => import('../views/home/dlzn.vue')
const txsq = () => import('../views/home/txsq.vue')
const aaaa = () => import('../views/home/aaaa.vue')
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
    path: '/newAtical',
    name: 'newAtical',
    component: newAtical
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
    path: '/my/newphone',
    component: newphone
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
    path: '/my/card',
    name: 'card',
    component: Card
  },
  {
    path: '/my/mail',
    name: 'mail',
    component: Mail
  },
  {
    path: '/my/tripartite',
    name: 'tripartite',
    component: Tripartite
  },
  {
    path: '/my/information',
    name: 'information',
    component: Information
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
  },
  {
    path: '/forget',
    component: Forget
  },
  {
    path: '/newword',
    component: newword
  },
  {
    path: '/kefu',
    component: kefu
  },
  {
    path: '/lbt',
    component: lbt
  },
  {
    path: '/lbt2',
    component: lbt2
  },
  {
    path: '/lbt3',
    component: lbt3
  },
  {
    path: '/jkbb',
    component: jkbb
  },
  {
    path: '/xyzn',
    component: xyzn
  },
  {
    path: '/jcxy',
    component: jcxy
  },
  {
    path: '/stfc',
    component: stfc
  },
  {
    path: '/gengduo',
    component: gengduo
  },
  {
    path: '/xyzk',
    component: xyzk
  },
  {
    path: '/zhcx',
    component: zhcx
  },
  {
    path: '/dier',
    component: dier
  },
  {
    path: '/hhhh',
    component: hhhh
  },
  {
    path: '/dlzn',
    component: dlzn
  },
  {
    path: '/payment',
    component: payment
  },
  {
    path: '/aircondition',
    component: aircondition
  },
  {
    path: '/timetable',
    name: 'timetable',
    component: Timetable
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: Evaluate
  },
  {
    path: '/Cname',
    name: 'Cname',
    component: Cname
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  },
  {
    path: '/allcourse',
    name: 'allcourse',
    component: Allcourse
  },
  {
    path: '/titlename',
    name: 'titlename',
    component: Titlename
  },
  {
    path: '/zhifu',
    name: 'immediately',
    component: immediately
  },
  {
    path: '/txsq',
    name: 'txsq',
    component: txsq
  },
  {
    path: '/success',
    name: 'success',
    component: success
  },
  {
    path: '/aaaa',
    name: 'aaaa',
    component: aaaa
  },
  {
    path: '/book',
    component: book
  }
]

const router = new VueRouter({
  routes
})

export default router
