//使用Pinia实现统一状态管理

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
//一般暴露出去的都是以use开头的方法
export const useCategoryStore = defineStore('category', () => {
  //store 中的 state对象
  const categoryList = ref([])

  //store 中的 action对象
  const getCategory = async () => {
    //异步运行接口函数，得到接口中的数据
    const res = await getCategoryAPI()
    //做响应式处理
    categoryList.value = res.result
  }

  //注意最后要使用 return
  return {
    categoryList,
    getCategory
  }
})
