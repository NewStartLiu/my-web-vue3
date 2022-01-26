/*
 * @Descripttion: vuex配置文件
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 15:05:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-25 15:11:35
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
