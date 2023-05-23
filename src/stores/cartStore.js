//使用Pinia封装购物车模块

import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore('cart',()=>{
    //1.定义state
    const cartList = ref([])    
    //2.定义action
    //2.1.添加购物车
    //此处的goods是从Detail->index.vue中传过来的参数，和接口中goods不一样
    const addCart = (goods)=>{
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

    //2.2.删除购物车（依靠skuId）
    const delCart = (skuId)=>{
        //实现数组的定点删除有两种办法：splice、filter
        //找到要删除项的下标值，使用splice（替换，会改变原数组）
        const idx = cartList.value.findIndex((item)=> skuId === item.skuId)
        cartList.value.splice(idx,1)
    }
    
    return{
        cartList,
        addCart,
        delCart
    }
},{
    persist:true
})