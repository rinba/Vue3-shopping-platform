//《会员中心 -> 我的订单 ->基础订单列表实现》的接口

/*
params: {
    orderState:0,   tab切换时的状态
    page:1,   当前页数
    pageSize:2   每页的条数 
}
*/
export const getUserOrder = (params) => {  //接收参数
    return request({
        url:'/member/order',
        method:'GET',
        params
    })
}