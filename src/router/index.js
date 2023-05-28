//路由器

//createRouter创建路由实例
//createWebHistory创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'        
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,  //首页
      children:[
        {
          //默认二级路由，将path配置为空
          path:'', 
          component:Home  //Home页
        },
        {
          //子路由path前面没有/，使用小写字母
          path:'category/:id',   
          component:Category  //一级分类

        },
        {
          path:'category/sub/:id',
          component:SubCategory  //二级分类
        },
        {
          path:'detail/:id',
          component:Detail  //详情页
        },
        {
          path:'cartlist',  
          component:CartList  //购物车
        },
        {
          path:'checkout',
          component:Checkout  //订单页
        },
        {
          path:'pay',
          component:Pay  //支付页
        },
        {
          path:'payback',
          component:PayBack  //支付结果页
        },
        {
          path:'member',
          component:Member,  //会员中心页
          children:[
            {
              path:'',
              component:UserInfo  //个人中心
            },
            {
              path:'order',
              component:UserOrder  //我的订单
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:Login  //登录页
    }
  ],
  //路由滚动优化，自动滚动到页面顶部
  scrollBehavior(){
    return {top:0}
  }
})

export default router
