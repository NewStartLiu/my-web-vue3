/*
 * @Descripttion:
 * @version:
 * @Author: 刘熠
 * @Date: 2022-02-11 15:14:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-11 15:16:58
 */
import ArticleCard from '@/components/articleCard/index.vue'

const globalComponents = {
  install(Vue: any) {
    Vue.component('ArticleCard', ArticleCard)
  }
}

export default globalComponents
