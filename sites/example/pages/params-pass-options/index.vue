<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-30 09:49:30
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

<script>
import { FoxApp } from './index'
export default {
  //方法
  methods: {
    toHome() {
      //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
      this.$router.push('/home', { target: 'home' })
    },
    toAbout() {
      //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
      this.$router.push('/about/jiangcheng')
    },
    toCat() {
      //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
      this.$router.push({ path: '/cat', params: { val: '江成' } })
    },
    toDog() {
      //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
      this.$router.push('/dog?val=小白')
    }
  },
  //创建后处理
  created() {
    //获取 fox
    let fox = this.$fox
    //安装路由
    FoxApp.install(fox)
  }
}
</script>