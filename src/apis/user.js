//封装所有和用户相关的接口函数

import httpInstance from "@/utils/http";

//登录页的接口
export const loginAPI = ({account, password})=>{
    return httpInstance({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}

//《个人中心 -> 我的账户 -> 猜你喜欢》的接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}


