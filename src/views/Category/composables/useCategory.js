//封装分类数据相关的代码


import { getCategoryAPI } from '@/apis/category';
import { onMounted,ref } from 'vue'
import { useRoute } from 'vue-router' //在组件中获取路由参数
//组件级路由守卫。在当前路由改变，但是该组件被复用时调用
import { onBeforeRouteUpdate} from 'vue-router' 

export function useCategory(){
    //根据路由参数的id得到响应式接口数据
    const categoryData = ref({}) //注意这里定义的是一个对象，因为接口中的result是一个object
    const route = useRoute()
    const getCategory = async (id = route.params.id)=>{ //定义默认id（接口函数中的id）
        const res = await getCategoryAPI(id) //此处的id是to给的最新的id
        categoryData.value = res.result
    }
    onMounted(()=>{
        getCategory()
    })
    onBeforeRouteUpdate((to)=>{
        //当路由参数的id变化时，得到最新的响应式接口数据
        getCategory(to.params.id)
    })

    return{
        categoryData
    }
}