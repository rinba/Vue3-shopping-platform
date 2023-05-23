import axios from 'axios'
//elementPlus的提示框
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

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
  const userStore = useUserStore()
  const router = useRouter()
  //统一错误提示
  //console.log(e)
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })

  //401token失效处理
  //1.清除本地用户数据
  if(e.response.status === 401){
    userStore.clearUserInfo()
  }
  //2.跳转到登录页
  router.push('/login')
  return Promise.reject(e)
})

export default httpInstance
