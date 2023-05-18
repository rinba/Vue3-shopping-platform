//封装接口函数

import httpInstance from "@/utils/http";

export function getCategoryAPI(id){
    return httpInstance({
        url:'/category',
        params:{  //路径中的路由参数，这里是拿params写的
            id
        }
    })
}