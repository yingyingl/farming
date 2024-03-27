import {
  createRouter,
  createWebHistory
} from 'vue-router'

/* Layout */
import Layout from '../layout'
import LayoutHome from '../layout/index-home'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    component: LayoutHome,
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
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
        path: 'plant/visualization',
        name: 'PlantVisualization',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/plant/visualization.vue')
      },



      {
        path: 'process/data',
        name: 'ProcessData',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/process/data.vue')
      },
      {
        path: 'promotion',
        name: 'PromotionIndex',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/promotion/index.vue')
      },
      {
        path: 'promotion/study',
        name: 'PromotionStudy',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/promotion/study.vue')
      },
      {
        path: 'promotion/detail/:id',
        name: 'PromotionDetail',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/promotion/newsDetail.vue')
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
