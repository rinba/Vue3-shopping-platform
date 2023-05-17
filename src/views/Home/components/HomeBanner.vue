<script setup>
//导入封装好的接口函数
import { getBannerAPI } from '@/apis/home';
import { ref,onMounted } from 'vue';

//创建响应式空数组
const bannerList = ref([])
//创建自定义函数
const getBanner = async ()=>{
  //异步运行接口函数，得到接口中的数据
  const res = await getBannerAPI()
  //测试是否得到接口中的数据
  //console.log(res) 
  //将接口中的数据转化成响应式数据
  bannerList.value = res.result
}
//在挂载完毕后，运行自定义函数，得到响应式接口数据
onMounted(() => {
  getBanner()
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img 
        :src="item.imgUrl"
        alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>