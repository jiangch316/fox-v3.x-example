<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<template>
    <div>
        <button class="my-button" @click="toHome">append home</button>
        <button class="my-button" @click="toAbout">append about</button>
        <button class="my-button" @click="remove">移除</button>
        <button class="my-button" @click="removeAll">移除所有</button>
        <button class="my-button" @click="removeUnti">移除到about</button>
    </div>
    <div class="my-router-view-div">
        <fox-router-view
            class="fox-views fox-views-window my-views"
            transition-name="fox-view-trans"
            transition="true"
            :multi="true"
            :view-tag="tagProvider"
            :view-tag-props="tagPropsProvider"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useFox } from '@fox-js/fox'
import { FoxApp } from './index'
import dialog from './components/dialog.vue'

export default defineComponent({
    setup() {
        //获取 fox
        let fox = useFox()!
        //安装fox app
        FoxApp.install(fox)
        //获取router
        let router = fox.router
        //append home页面
        let toHome = () => {
            router.append('/home')
        }
        //apend about页面
        let toAbout = () => {
            router.append('/about')
        }
        //移除最上层页面
        let remove = () => {
            router.remove()
        }
        //移除所有页面
        let removeAll = () => {
            router.remove({ all: true })
        }
        //移除所有页面
        let removeUnti = () => {
            router.remove({ until: '/about' })
        }

        let tagProvider = (route: any, index: number) => {
            if (index == 0) {
                return 'div'
            } else {
                return dialog
            }
        }

        let top = 30
        let tagPropsProvider = (route: any, index: number) => {
            let props = {
                top: `${top + 20 * index}px`
            }
            return props
        }

        return {
            toHome,
            toAbout,
            remove,
            removeAll,
            removeUnti,
            tagProvider,
            tagPropsProvider
        }
    }
})
</script>

<style>
.my-views {
    position: relative;
}
</style>
