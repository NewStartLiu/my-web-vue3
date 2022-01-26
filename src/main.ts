/*
 * @Descripttion: 入口文件
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 14:46:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 09:37:55
 */
import { createApp } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router/index'
import store from '@/store/index'
import App from './App.vue'

// element-plus
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.config.globalProperties.$message = ElMessage

app.mount('#app')
// createApp(App).use(router).mount('#app')
