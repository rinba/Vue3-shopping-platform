//通过插件的方式，注册全局指令

import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app){
        //懒加载指令逻辑
        app.directive('img-lazy',{
            mounted(el,binding){
                //el：指令绑定的那个元素，此处是图片
                //binding.value 传递给指令的值，此处是图片的url
                //console.log(el,binding.value) 验证
                const {stop} = useIntersectionObserver( //解构赋值的写法拿到该方法的stop方法
                    el,
                    ([{ isIntersecting}])=>{
                        //console.log(isIntersecting)
                        if(isIntersecting){
                            //当图片进入视口区域时，使用懒加载
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}