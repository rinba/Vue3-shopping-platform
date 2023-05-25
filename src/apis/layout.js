//封装首页相关的接口函数

import httpInstance from '@/utils/http'

export function getCategoryAPI(){
    return httpInstance({
        //此处url来自于项目接口中“获取-全部分类”的路径
        //顶部导航栏和左侧导航栏的接口
        url:'/home/category/head'
    })
}