import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import { createPinia } from 'pinia' 
//初始化样式文件
import '@/styles/common.scss'
//懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(lazyPlugin)
app.mount('#app')
