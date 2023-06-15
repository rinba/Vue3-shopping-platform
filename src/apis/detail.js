//封装详情页相关的接口函数

import httpInstance from "@/utils/http";

//获取基础数据
export const getDetail = (id)=>{
    return httpInstance({
        url:'/goods',
        params:{
            id //接口中有Query参数id
        }
    })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return httpInstance({
        url:'/goods/hot',
        params:{
            id, 
            type, 
            limit
        }
    })
}
