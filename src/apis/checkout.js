//封装订单页相关的接口

import httpInstance from "@/utils/http"

export const getCheckoutAPI = ()=>{
    return httpInstance({
        url:'/member/order/pre'
    })
}
