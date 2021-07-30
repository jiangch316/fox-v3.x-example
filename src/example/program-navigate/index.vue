<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<template>
    <div>
        <fox-router-link tag='button' to='/home' class="my-button">go home</fox-router-link>
        <fox-router-link tag='button' to='/about' class="my-button">go about</fox-router-link>
        <button class="my-button" @click="closeHome">close home</button>
        <button class="my-button" @click="closeAbout">close about</button>
    </div>
    <div class="my-router-view-div">
        <fox-router-view></fox-router-view>
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
        //安装fox app
        FoxApp.install(fox)

        //获取路由器
        let router = fox.router

        let toHome = ()=>{
             router.push('/home')
        }

        let toAbout = ()=>{
            router.push('/about')
        }

        let closeHome = ()=>{
             router.close('/home')
        }

        let closeAbout = ()=>{
            router.close('/about')
        }

        return {
            toHome,
            toAbout,
            closeHome,
            closeAbout,
        }
    },
})
</script>

<style scoped>
   .fox-router-link-active{
       color:red
   }
</style>
