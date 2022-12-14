import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import(/* webpackChunkName: 'home' */ '@/views/home/Home.vue')
    },
    {
      path: '/favor',
      component: () => import(/* webpackChunkName: 'favor' */ '@/views/favor/Favor.vue')
    },
    {
      path: '/order',
      component: () => import(/* webpackChunkName: 'order' */ '@/views/order/Order.vue')
    },
    {
      path: '/message',
      component: () => import(/* webpackChunkName: 'message' */ '@/views/message/Message.vue')
    }
  ]
})

export default router