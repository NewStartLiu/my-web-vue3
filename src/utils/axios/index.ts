/*
 * @Descripttion: axios配置
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 15:59:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 14:46:54
 */
import Axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const axios = Axios.create({
  timeout: 10000,
  baseURL: ''
})

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // console.log(error, error.response, error.message)
    ElMessage.error('请求错误')
    return Promise.reject(error)
  }
)

export default axios
