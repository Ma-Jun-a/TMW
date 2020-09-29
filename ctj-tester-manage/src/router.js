import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/Home/Home')

const Login = () => import('@/views/Login/Login')
const Api = () => import('@/views/Api/Api')
const Project = () => import('@/views/Project/Project/')
const Scripts = () => import('@/views/Scripts/Scripts')
const Results = () => import('@/views/Results/Results')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // meta: {
    //   requireAuth: true
    // }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/api',
    component: Api,
  },
  {
    path: '/scripts',
    component: Scripts,
  },
  {
    path: '/results',
    component: Results,
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
