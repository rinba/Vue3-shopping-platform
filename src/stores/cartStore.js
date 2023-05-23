//使用Pinia封装购物车模块

import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore('cart',()=>{
    //1.定义state
    const cartList = ref([])    
    //2.定义action
    //此处的goods是从Detail->index.vue中传过来的参数，和接口中goods不一样
    const addCart = (goods)=>{
        //添加购物车操作
        //已添加过，count+1；没有添加过，直接push
        //通过匹配传递过来的商品对象中的skuId能不能在cartlist中找到，找到了就是添加过
        const item = cartList.value.find((item)=>goods.skuId === item.skuId)
        if(item){
            //找到了
            item.count++
        }else{
            //没找到
            cartList.value.push(goods)
        }
    
    }   
    return{
        cartList,
        addCart
    }
},{
    persist:true
})