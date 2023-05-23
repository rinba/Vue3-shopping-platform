//创建整个项目的路由器

//createRouter创建路由实例
//createWebHistory创建history模式路由
// 登录页、首页、Home页、分类页
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'

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
          path:'category/:id',   //写子路由时路径前面没有/ 
          component:Category

        },
        {
          path:'category/sub/:id',
          component:SubCategory
        },
        {
          path:'detail/:id',
          component:Detail
        },
        {
          path:'cartlist',  //小写
          component:CartList
        
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }
  ],
  //路由滚动优化，自动滚动到页面顶部
  scrollBehavior(){
    return {top:0}
  }
})

export default router
