/*
 * @Descripttion: 路由配置文件
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 14:55:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 17:41:39
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
