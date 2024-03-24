import {
  createRouter,
  createWebHistory
} from 'vue-router'

/* Layout */
import Layout from '../layout'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/index'
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/home/index.vue')
      }
    ]
  }
]

const whiteList = [] // no redirect whitelist

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {
  const token = to.query.token || ''
 
 // if (whiteList.indexOf(to.path) === -1 && to.path !== '/login' && !token) {
 //   next(`/login?redirect=${to.path}`)
 // } else {
    next()
 // }
})

export default router


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
