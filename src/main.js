import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import { createPinia } from 'pinia' 
//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
//引入全局组件插件并且注册
import { componentPlugin } from './components'
//引入Pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
app.use(router)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate) //注册Pinia持久化插件
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
