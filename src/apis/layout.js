//封装接口函数

import httpInstance from '@/utils/http'

export function getCategoryAPI(){
    return httpInstance({
        //此处url来自于项目接口中“获取-全部分类”的路径
        url:'/home/category/head'
    })
}