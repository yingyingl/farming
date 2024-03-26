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
      },


      {
        path: 'breeding',
        name: 'BreedingIndex',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/breeding/index.vue')
      },
      {
        path: 'breeding/monitor',
        name: 'BreedingMonitor',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/breeding/monitor.vue')
      },
      {
        path: 'breeding/expert',
        name: 'BreedingExpert',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/breeding/expert.vue')
      },
      {
        path: 'breeding/data',
        name: 'BreedingData',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/breeding/data.vue')
      },


      {
        path: 'plant',
        name: 'PlantIndex',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/plant/index.vue')
      },
      {
        path: 'process',
        name: 'ProcessIndex',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/process/index.vue')
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
