/*
 * @Descripttion: 接口信息
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 16:23:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 09:57:49
 */
import axios from '@/utils/axios/index'

export function test(params: Object) {
  return axios({
    url: '/404',
    method: 'get',
    params
  })
}

export function test2(params: Object) {
  return axios({
    url: '/404',
    method: 'get',
    params
  })
}
