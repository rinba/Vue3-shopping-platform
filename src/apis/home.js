//封装Home页相关的接口函数

import httpInstance from '@/utils/http'

export function getBannerAPI(params={}){
    //请求参数distributionSite，首页为1（默认），分类商品页为2
    const {distributionSite = '1'} = params
    return httpInstance({
        //banner（轮播图）的接口
        url:'/home/banner',
        params:{
            distributionSite
        }
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
        //产品列表的接口
        url:'/home/goods'
    })
}
