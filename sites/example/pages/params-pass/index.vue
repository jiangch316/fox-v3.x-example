<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-28 10:23:13
-->
<template>
  <div>
    <button class="my-button" @click="toHome">params方式</button>
    <button class="my-button" @click="toAbout">path方式</button>
    <button class="my-button" @click="toCat">props方式</button>
    <button class="my-button" @click="toDog">query方式</button>
  </div>
  <div>
    <fox-router-view :multi="false"></fox-router-view>
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
    //安装路由
    FoxApp.install(fox)
    //获取 router
    let router = fox.router

    let toHome = () => {
      //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
      router.push('/home', { target: 'home' })
    }
    let toAbout = () => {
      //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
      router.push('/about/jiangcheng')
    }
    let toCat = () => {
      //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
      router.push({ path: '/cat', params: { val: '江成' } })
    }
    let toDog = () => {
      //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
      router.push('/dog?val=小白')
    }
    return {
      toHome,
      toAbout,
      toCat,
      toDog
    }
  }
})
</script>
