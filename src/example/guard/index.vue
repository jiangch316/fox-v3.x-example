<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-28 11:39:04
-->
<template>
    <div>
        <button class="my-button" @click="to('/dog')">go dog</button>
        <button class="my-button" @click="to('/cat')">go cat</button>
        <button class="my-button" @click="to('/snake')">go snake</button>
    </div>
     <div>
         <fox-router-view></fox-router-view>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useFox } from '../../assets/libs/fox-v3.0.0/index'
// import { useFox } from '../../core/index'
import { FoxApp } from './index'

export default defineComponent({
    setup() {
        //获取 fox
        let fox = useFox()!
        //安装路由
        FoxApp.install(fox)
        //获取 router
        let router = fox.router
        let to = (path:string)=>{
            //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
             router.push(path, {})
        }
        return {
            to
        }
    },
})
</script>