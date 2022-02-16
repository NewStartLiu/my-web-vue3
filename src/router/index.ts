/*
 * @Descripttion: 路由配置文件
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 14:55:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 10:24:42
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/study',
        name: 'Study',
        component: () => import('@/views/study/index.vue'),
        meta: {
          title: '学习'
        }
      },
      {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/tools/index.vue'),
        meta: {
          title: '工具'
        }
      },
      {
        path: '/webLog',
        name: 'WebLog',
        component: () => import('@/views/webLog/index.vue'),
        meta: {
          title: '网站日志'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/errorPage/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
