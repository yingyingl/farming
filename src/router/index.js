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
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/index.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/login.vue')
      },
      {
        path: 'manage',
        name: 'manage',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/manage.vue')
      },
      {
        path: 'expert',
        name: 'expert',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/expert.vue')
      },
      {
        path: 'meeting',
        name: 'meeting',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/meeting.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "docs-index" */ '@/views/list.vue')
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
  const token = localStorage.getItem('adminToken')

  if (whiteList.indexOf(to.path) === -1 && to.path !== '/login' && !token) {
    next(`/login?redirect=${to.path}`)
  } else if (token && to.path === '/login') {
    next('/index')
  } else {
    next()
  }
})

export default router


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
