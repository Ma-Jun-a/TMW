import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home/Home.vue')
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


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to,from,next)=>{
//   //window.document.title=to.meta.title;
//   if(to.meta.requireAuth == true){  //需要登录权限进入的路由
//     if(store.state.token){  //取到登录信息
//       next()
//     }else if(sessionStorage.getItem('isLogin')){  //得到登录信息，进行下一步
//       next();
//     }else{
//       next({name:'Login'});
//     }
//   }else{  //不需要登录权限
//     next();
//   }
// })

export default router
