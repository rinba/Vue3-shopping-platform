//封装订单页相关的接口

import httpInstance from "@/utils/http"

//生成订单
export const getCheckoutAPI = ()=>{
    return httpInstance({
        url:'/member/order/pre'
    })
}

//提交订单
export const createOrderAPI = (data)=>{
    return httpInstance({
        url:'/member/order',
        method:'POST',
        data
    })
}