<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<template>
    <div>
        <button @click="toHome" class="my-button">go home</button>
        <button @click="toAbout" class="my-button">go about</button>
        <button class="my-button" @click="closeHome">close home</button>
        <button class="my-button" @click="closeAbout">close about</button>
    </div>
    <div class="my-router-view-div">
        <fox-router-view></fox-router-view>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useFox } from '@fox-js/fox'
import { FoxApp } from './index'

export default defineComponent({
    setup() {
        //获取 fox
        let fox = useFox()!
        //安装fox app
        FoxApp.install(fox)

        //获取路由器
        let router = fox.router

        let toHome = () => {
            console.info('--------- navigate to home a')
            router.push('/home')
        }

        let toAbout = () => {
            console.info('--------- navigate to about b')
            router.push('/about')
        }

        let closeHome = () => {
            router.close('/home')
        }

        let closeAbout = () => {
            router.close('/about')
        }

        return {
            toHome,
            toAbout,
            closeHome,
            closeAbout
        }
    }
})
</script>

<style scoped>
.fox-router-link-active {
    color: red;
}
</style>
