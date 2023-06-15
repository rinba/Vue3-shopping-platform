//封装分类相关接口函数

import httpInstance from "@/utils/http";

export function getCategoryAPI(id){
    return httpInstance({
        url:'/category',
        params:{  //路径中的路由参数，这里是拿params写的
            id
        }
    })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
    return httpInstance({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
}