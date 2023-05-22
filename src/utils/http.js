import axios from 'axios'
//elementPlus的提示框
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  //1.从Pinia中获取接口中token数据
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  //2.按照后端的要求拼接token数据
  if(token){
    //注意模板字符串里面有一个空格
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  //统一错误提示
  //console.log(e)
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  return Promise.reject(e)
})

export default httpInstance
