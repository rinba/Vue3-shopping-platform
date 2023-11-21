## 技术栈：
create-vue + Vite + Pinia + VueUse + ElementPlus + Vue-Router + SCSS + Axios

**安装步骤：**
```
git clone 项目地址       // 把项目下载到本地
cd Vue3-shopping-platform    // 进入项目目录
npm install             // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn
npm run dev             // 运行项目

npm run build           // 执行构建命令，生成的dist文件夹放在服务器下即可访问
```
## 项目亮点1：灵活选择使用Pinia进行统一管理状态
### 情况一：接口中没有路由参数+使用Pinia
《Layout->components->LayoutFixed.vue和LayoutHeader》。首先已经封装好接口函数。接着创建stores->category.js，经过Pinia的 state 的 action对象和state对象处理后，定义获取接口数据的action函数。接着在index.vue中触发（onMounted）Pinia的action对象，获取响应式接口数据。接着在LayoutFixed.vue中导入并使用Pinia暴露的方法，交付action获取的响应式接口数据（特例）。最后使用v-for遍历该数据，渲染组件。
<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/968ce817-186f-43ed-a080-2540e4f92f97)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/a4ee43c9-3d97-4a4f-92d0-b472675529a8)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/cf8ca2cd-9e56-4833-acbc-8c1aae95c377)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/a325a2d4-1c64-4648-a801-b137bc41aad9)<br/>
### 情况二：接口中没有路由参数+不使用Pinia
《Home->components->HomeBanner.vue》，在HomeBanner组件中导入封装好的接口函数+响应式处理，接着在onMounted中触发getBanner()，获取响应式接口数据。最后v-for遍历该数据，渲染组件。<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/1d756536-5a49-4365-bebb-4d54fa9fa89b)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/52f61421-3f8b-44bf-9451-a4171b2268df)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/d5f251eb-5ef5-4c4f-84a4-51f887d8e6bc)<br/>
### 情况三：接口中有路由参数（一般不会用Pinia）
《views->Detail->index.vue》首先创建apis->detail.js，在里面封装接口函数（接口中有Query参数id，所以放在params对象里）。接着在views->Detail->index.vue中导入封装好的接口函数+响应式处理，接着在onMounted中触发getGoods()，获取响应式接口数据。最后v-for遍历该数据，渲染页面。<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/22009c88-c5c6-4293-a887-987415126991)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/50f0c73b-b692-4b56-a6b8-52573fd9e91d)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/4b3c4b12-ed58-4388-aa79-023f58543f13)<br/>

## 项目亮点2：封装图片懒加载指令
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/3f71a8f0-8a70-49a0-8d3a-d8e804945c9f)<br/>
验证：在控制台的网络一栏中，将页面清空，当我们将页面下拉到图片进入视口，此时懒加载出四张图片，如下所示：<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/c6e6dbb6-1066-40bc-9059-b09c5968b97a)<br/>


## 项目亮点3：封装可复用的组件
在项目的很多个业务模块中都需要用到同样的商品展示模块（GoodsItem.vue），没必要重复定义，封装起来，方便复用。<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/70ad42b1-bf18-4b1d-979e-e3c1618b4a01)<br/>
展示：为HomeProduct.vue创建一个子组件GoodsItem.vue，将goods对象传给GoodsItem.vue，在子组件中接收goods对象并使用。<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/d333c1c0-6e51-4ab3-a5e0-95dc14a98fbc)<br/>

## 项目亮点4：封装JS倒计时函数
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/c7c62f91-07b2-4c7c-9f32-f12c051cd2ba)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/11955222-0aa7-4918-9602-6c92326037a1)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/0f53b0cd-43b6-416c-ac48-df393a095dfd)<br/>
验证：浏览器如下所示：<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/90ca0c3e-1e58-4f98-89ff-7361d2e7c2d9)<br/>


## 项目难点：拆开v-model为:modul-value 和 @change
在《购物车->本地购物车-列表购物车-单选功能》中实现 “单选框切换时修改store中对应的状态” 时，使用常规写法只能在singleCheck中获取到selected参数，无法知道在store的cartList修改谁的选中状态，所以除了selected我们还可以补充一个用来筛选的参数——skuId<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/6be068fa-a88d-44c0-a1bf-d5b8691a06a5)<br/>
我们可以将绑定事件写成箭头函数的回调写法，在方法后面调用实际的回调，获取 i（ i 中有skuId），如下所示：<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/07201e79-da5a-4325-a9b8-a0a1f68f98ba)<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/fbd3ad52-5013-4760-ac33-43ef50eeae7c)<br/>
验证：点击左侧单选框，控制台输出当前选中对象（含skuId）和选中状态。<br/><br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/5c301533-04d7-4375-9257-c887d70de230)<br/>
<br/><br/><br/>

## 一级路由：

### 首页
**（未登录）**<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/462e6d5e-3878-4a2a-99b6-61d821866281)<br/><br/>
**（已登录）**<br/>
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/d771d08f-78e7-431e-a0e5-9fe42039fabb)<br/><br/>

### 登录页
![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/a258440f-4b0d-444c-8240-1d6116b1c994)<br/><br/>

## 二级路由：

### Home页

![image-20230528203353141](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/d2d2009e-7749-4286-901c-6a86e88c1d45)<br/><br/>

### 一级分类

![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/76658fe3-2d45-4677-9ef8-becc81b9fe82)<br/><br/>

### 二级分类

![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/3a7c3d7f-1b23-407e-9314-7a024232acdf)<br/><br/>

### 详情页

![image-20230528204007563](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/3a74a45c-042c-4cda-89ee-1a97357e9190)<br/><br/>

### 购物车

![image-20230528204114405](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/d22361af-4c0f-4e43-8e2f-a211ff4ab745)<br/><br/>

![image-20230528204215872](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/0d414501-b476-4cec-b804-4d70b0b0d3d3)<br/><br/>

### 订单页

![image-20230528204356225](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/17d9ec54-afd3-4706-a128-ed8ebec7e5b7)<br/><br/>

![image-20230528204422032](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/0d836022-fafe-4bb4-a05d-64c993830ff4)<br/><br/>

![image-20230528204439830](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/98b456da-65f3-4446-a561-14e3c86b0acd)<br/><br/>

### 支付页

![image-20230528204525330](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/3de89c61-ca3a-4b34-a9a2-c539c76eabef)<br/><br/>

### 支付结果页

![image-20230528204808606](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/36a4dc14-fbd5-404d-bb57-95c068abd7ca)<br/><br/>

![image-20230528204843527](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/b112507a-03d8-41bd-89cc-5dd0fd748adb)<br/><br/>

![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/cf5abdf5-2de9-45a9-8ee2-8c21bb0d816f)<br/><br/>


### 个人中心页

![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/20c3b163-f3af-4285-a7d5-cceac83fb89e)<br/><br/>

## 三级路由：

### 我的账户

![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/60fe706f-8fcc-4dea-afae-034dedd42c51)<br/><br/>

### 历史订单

![image](https://github.com/rinba/Vue3-shopping-platform/assets/106224527/54d5381e-d11c-4f29-bfc0-389d7b8acc72)<br/><br/>
