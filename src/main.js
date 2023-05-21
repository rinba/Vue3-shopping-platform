import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import { createPinia } from 'pinia' 
//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
//引入全局组件插件
import { componentPlugin } from './components'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
