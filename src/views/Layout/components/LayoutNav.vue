<script setup>
//Pinia
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
import { useRouter } from 'vue-router';

const router = useRouter()
const confirm = ()=>{
  //console.log('用户要退出登录了')
  //退出登录时业务逻辑实现
  //1.清除当前用户信息（触发action）
  userStore.clearUserInfo()
  //2.跳转到登录页
  router.push('/login')
}
</script>

<template>
    <!--nav标签是HTML5的新标签，定义导航链接的部分-->
    <nav class="app-topnav">
        <div class="container">
        <ul>
            <!--使用v-if、v-else多模板渲染，区分登录状态和非登录状态-->
            <!--适配思路：登录时（有token）显示第一块模板，非登录时显示第二块模板-->
            <template v-if="userStore.userInfo.token">
            <li><a href="javascript:;" @click="$router.push('/member')"><i class="iconfont icon-user"></i>个人中心</a></li>
            <li>
                <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                <template #reference>
                    <a href="javascript:;">退出登录</a>
                </template>
                </el-popconfirm>
            </li>
            </template>
            <template v-else>
            <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
            <li><a href="javascript:;">关于我们</a></li>
            </template>
        </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li{
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: $xtxColor;
        }
      }
      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>