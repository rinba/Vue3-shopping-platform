//使用Pinia管理全部分类相关的数据

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
//一般暴露出去的都是以use开头的方法
export const useCategoryStore = defineStore('category', () => {
  //1.定义管理用户数据的state
  const categoryList = ref([])

  //2.定义获取接口数据的action函数
  const getCategory = async () => {
    //异步运行接口函数，得到接口中的数据
    const res = await getCategoryAPI()
    //做响应式处理
    categoryList.value = res.result
  }

  //3.以对象的格式把state和action  return
  return {
    categoryList,
    getCategory
  }
})
