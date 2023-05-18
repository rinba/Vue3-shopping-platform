//封装4个接口函数

import httpInstance from '@/utils/http'

export function getBannerAPI(){
    return httpInstance({
        //banner（右侧轮播图）的接口
        url:'/home/banner'
    })
}

export const findNewAPI = () => {
    return httpInstance({
        //新鲜好物的接口
        url:'/home/new'
    })
}

export const findHotAPI = ()=>{
    return httpInstance({
        //人气推荐的接口
        url:'/home/hot'
    })
}

export const getGoodsAPI = ()=>{
    return httpInstance({
        //人气推荐的接口
        url:'/home/goods'
    })
}
