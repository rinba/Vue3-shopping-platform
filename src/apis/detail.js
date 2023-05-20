//封装接口函数

import httpInstance from "@/utils/http";

export const getDetail = (id)=>{
    return httpInstance({
        url:'/goods',
        params:{
            id //接口中有Query参数id
        }
    })
}