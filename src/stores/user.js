//使用Pinia管理用户相关的数据

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user',()=>{
    const cartStore = useCartStore()

    //1.定义管理用户数据的state
    const userInfo = ref({})
    //2.定义获取接口数据的action函数
    //登录
    const getUserInfo = async ({account,password})=>{
        const res = await loginAPI({account,password})
        userInfo.value = res.result
        //登录时合并购物车。这里是双异步任务
        await mergeCartAPI(cartStore.cartList.map(item =>{
            return{
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        //获取最新购物车列表
        cartStore.updateNewList()
    }
    //退出登录时，清除用户信息及清空购物车
    const clearUserInfo = ()=>{
        userInfo.value = {}
        cartStore.clearCart()
    }

    //3.以对象的形式把state和action  return
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true
})