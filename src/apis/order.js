//《个人中心->历史订单->订单列表》的接口

import httpInstance from "@/utils/http"
/*
params: {
    orderState:0,   tab切换时的状态
    page:1,   当前页数
    pageSize:2   每页的条数 
}
*/
export const getUserOrder = (params) => {  //接收参数
    return httpInstance({
        url:'/member/order',
        method:'GET',
        params
    })
}