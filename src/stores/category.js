//使用Pinia实现统一状态管理

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
//一般暴露出去的都是以use开头的方法
export const useCategoryStore = defineStore('category', () => {
  //Pinia中的 state部分
  const categoryList = ref([])

  //Pinia中的 action部分
  const getCategory = async () => {
    //执行接口函数，得到接口中的数据，并做响应式处理
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }

  //注意最后要使用 return
  return {
    categoryList,
    getCategory
  }
})
