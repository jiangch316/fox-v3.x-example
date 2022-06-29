<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<template>
  <div>
    <button class="my-button" @click="toHome">go home</button>
    <button class="my-button" @click="toAbout">go about</button>
    <button class="my-button" @click="toOther">go other</button>
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

    let router = fox.router
    let toHome = () => {
      router.push('/home')
    }

    let toAbout = () => {
      router.push('/about')
    }

    let toOther = () => {
      router.push('/other')
    }

    return {
      toHome,
      toAbout,
      toOther
    }
  }
})
</script>

<style>
.fox-card-views {
  padding: 0px 0x 0px 0px;
}

.fox-card-view {
  position: relative;
  overflow: hidden;
}

.fox-card-view-trans-enter {
}

.fox-card-view-trans-enter-active {
  animation: fox-card-view-in-slide-right 330ms;
  -webkit-animation: fox-card-view-in-slide-right 330ms;
  z-index: 120;
}

.fox-card-view-trans-enter-to {
}

/* 进场动画 */
@-webkit-keyframes fox-card-view-in-slide-right {
  0% {
    opacity: 0;
    -webkit-transform: translateX(30%);
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@keyframes fox-card-view-in-slide-right {
  0% {
    opacity: 0;
    -webkit-transform: translateX(30%);
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
</style>
