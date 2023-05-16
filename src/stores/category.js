import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
//一般暴露出去的都是以use开头的方法
export const useCategoryStore = defineStore('category', () => {
  //Pinia中的state部分————导航列表数据
  const categoryList = ref([])

  //Pinia中的action部分————获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory
  }
})
