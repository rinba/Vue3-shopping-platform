//封装购物车相关接口


import httpInstance from "@/utils/http"

//加入购物车
export const insertCartAPI = (({skuId,count})=>{
    return httpInstance({
        url:'/member/cart',
        method:'POST',
        data:{
            skuId,
            count
        }
    })
})

//获取最新的购物车列表
export const findNewCartListAPI = ()=>{
    return httpInstance({
        url:'/member/cart'
    })
}