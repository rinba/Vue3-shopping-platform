//创建整个项目的路由器

//createRouter创建路由实例
//createWebHistory创建history模式路由
// 登录页、首页、Home页、分类页
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path:'', //默认二级路由，将path配置为空
          component:Home
        },
        {
          path:'category',   //写子路由时路径前面没有/ 
          component:Category

        }
      ]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
