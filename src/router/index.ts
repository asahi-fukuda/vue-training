import CounterPage from '@/views/counter/CounterPage.vue'
import Component from '@/components/pages/Component.vue'
import TopPage from '@/components/pages/TopPage.vue'
import DetailPage from '@/components/pages/DetailPage.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'qiita',
    component: TopPage,
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailPage,
  },
  {
    path: '/component',
    name: 'component',
    component: Component,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterPage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
