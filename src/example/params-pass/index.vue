<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-28 10:23:13
-->
<template>
    <div>
        <button class="my-button" @click="toHome">go home</button>
        <button class="my-button" @click="toAbout">go about</button>
    </div>
     <div>
         <fox-router-view  :multi=false></fox-router-view>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useFox } from '../../assets/libs/fox-v3.0.0/index'
import { FoxApp } from './index'

export default defineComponent({
    setup() {
        //获取 fox
        let fox = useFox()!
        //安装路由
        FoxApp.install(fox)
        //获取 router
        let router = fox.router
        let toHome = ()=>{
            //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
             router.push('/home', {'target':'home'})
        }
        let toAbout = ()=>{
             //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
            router.push('/about', {'target':'about'})
        }
        return {
            toHome,
            toAbout
        }
    },
})
</script>