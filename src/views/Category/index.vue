<script setup>
import { getCategoryAPI } from '@/apis/category';
import { onMounted,ref } from 'vue'
import { useRoute } from 'vue-router' //在组件中获取路由参数
import { onBeforeRouteUpdate} from 'vue-router' //当路由参数变化时，重新发送数据接口

//根据路由参数的id得到响应式接口数据
const categoryData = ref({}) //注意这里定义的是一个对象，因为接口中的result是一个object
const route = useRoute()
const getCategory = async (id = route.params.id)=>{
    const res = await getCategoryAPI(id) //此处是封装接口函数的params的id
    categoryData.value = res.result
}
onMounted(()=>{
    getCategory()
})
onBeforeRouteUpdate((to)=>{
    //使用最新的路由参数id请求最新的数据
    getCategory(to.params.id)
})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">  <!--面包屑的分隔符是 > -->
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>