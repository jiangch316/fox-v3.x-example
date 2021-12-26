/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-25 12:59:49
 */

import { defineComponent, h} from 'vue'

//创建组件dog
const Dog = defineComponent({
    setup(){
        return ()=>{
           return h('div',{}, ['this is a dog'])
        }
    }
 })

//创建组件car
const Car = defineComponent({
    setup(){
        return ()=>{
           return h('div',{}, ['this is a car'])
        }
    }
 })


 //路由表
let routes = [
    {
        path:'/',
        redirect:'/dog'
    },
    {
        path:'/dog',
        component:Dog,
    },
    {
        path:'/car',
        component:Car,
    }
]

//Fox App
export let FoxApp = {

    /***
     * 安装
     */
    install(fox:any){
        //加入路由
        fox.router.addRoutes(routes)
    }
} 



