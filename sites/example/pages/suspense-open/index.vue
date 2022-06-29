<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<script lang="ts" setup>
import { useFox } from '@fox-js/fox'
import { FoxApp } from './index'

//获取 fox
let fox = useFox()!
//安装fox app
FoxApp.install(fox)

//获取路由器
let router = fox.router

let toHome = () => {
  console.info('--------- navigate to home a')
  router.open('/home')
}

let toAbout = () => {
  console.info('--------- navigate to about b')
  router.open('/about')
}

let closeHome = () => {
  router.close('/home')
}

let closeAbout = () => {
  router.close('/about')
}
</script>
<template>
  <div>
    <button @click="toHome" class="my-button">go home</button>
    <button @click="toAbout" class="my-button">go about</button>
    <button class="my-button" @click="closeHome">close home</button>
    <button class="my-button" @click="closeAbout">close about</button>
  </div>
  <div class="my-router-view-div">
    <fox-router-view
      class="fox-views fox-card-views"
      view-class="fox-card-view"
      view-active-class="fox-card-view-active"
      view-deactive-class="fox-card-view-deactive"
      transition="true"
      transition-name="fox-card-view-trans"
      :multi="true"
      v-slot="{ Component }"
    >
      <Suspense>
        <template #default>
          <div><component :is="Component" /></div>
        </template>
        <template #fallback>
          <h1>Loading</h1>
        </template>
      </Suspense>
    </fox-router-view>
  </div>
</template>


<style scoped>
.fox-router-link-active {
  color: red;
}
</style>
