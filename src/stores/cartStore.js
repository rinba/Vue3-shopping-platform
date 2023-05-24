//使用Pinia封装购物车模块

import { defineStore } from "pinia"
import { computed,ref } from "vue"

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

    //2.3.单选功能
    const singleCheck = (skuId,selected)=>{ //接收参数
        //通过skuId找到要修改的哪一项，然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item)=>item.skuId === skuId)
        item.selected = selected
    }
    //2.4.全选功能
    const allCheck = (selected) =>{ //接收参数
        //把cartList中的每一项的selected都设置为当前的全选框状态。使用数组的 forEach()
        cartList.value.forEach(item => item.selected = selected)
    }

    //计算属性
    //头部购物车
    //总的商品数量   所有项的count之和，使用数组的reduce()累加实现。
    //a是上次调用函数的返回值，c是当前元素，0是迭代的初始值
    const allCount = computed(()=>cartList.value.reduce((a,c)=> a + c.count,0))
    //总价格   所有项的count*price之和
    const allPrice = computed(()=>cartList.value.reduce((a,c)=> a + c.count * c.price,0))

    //列表购物车
    //是否全选   所有项的selected都为true，它才为true。使用数组的 every()
    const isAll = computed(()=>cartList.value.every(item => item.selected))
    //已选择的商品数量   先过滤filter()，再累加reduce()，链式调用
    const selectedCount = computed(()=>cartList.value.filter(item => item.selected).reduce((a,c)=> a + c.count,0))
    //已选择的商品总价格   
    const selectedPrice = computed(()=>cartList.value.filter(item => item.selected).reduce((a,c)=> a + c.count * c.price,0))


    return{
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        addCart,
        delCart,
        singleCheck,
        allCheck
    }
},{
    persist:true
})