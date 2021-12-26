<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 17:59:28
-->
<template>
    <div>主面版</div>
    <div>
        <button class="my-button" @click="toHome">go home</button>
        <button class="my-button" @click="toAbout">go about</button>
    </div>
    <div>
        <input type="text" />
    </div>
    <div>
        <fox-router-view name="_sub_root_view" :multi="false"></fox-router-view>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useFox } from '@fox-js/fox'

export default defineComponent({
    setup() {
        onMounted(() => {
            console.info(`>>>>> on mounted(panel)`)
        })
        onUnmounted(() => {
            console.info(`----- on unmounted(panel)`)
        })

        //获取 fox
        let fox = useFox()!
        //获取 router
        let router = fox.router
        let toHome = () => {
            //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
            router.push('/home', { target: 'home' }, '_sub_root_view')
        }
        let toAbout = () => {
            //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
            router.push('/about', { target: 'about' }, '_sub_root_view')
        }
        return {
            toHome,
            toAbout
        }
    }
})
</script>
