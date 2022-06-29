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
    <button class="my-button" @click="closeHome">close home</button>
    <button class="my-button" @click="closeAbout">close about</button>
    <button class="my-button" @click="closeOther">close other</button>
  </div>
  <div class="router-view-div router-view-div">
    <fox-router-view
      class="fox-views fox-card-views"
      view-class="fox-card-view"
      view-active-class="fox-card-view-active"
      view-deactive-class="fox-card-view-deactive"
      transition="true"
      transition-name="fox-card-view-trans"
      :multi="true"
    ></fox-router-view>
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
      router.open('/home')
    }

    let toAbout = () => {
      router.open('/about')
    }

    let toOther = () => {
      router.open('/other')
    }

    let closeHome = () => {
      router.close('/home')
    }

    let closeAbout = () => {
      router.close('/about')
    }

    let closeOther = () => {
      router.close('/other')
    }

    return {
      toHome,
      toAbout,
      toOther,
      closeHome,
      closeAbout,
      closeOther
    }
  }
})
</script>

<style>
.router-view-div {
  width: 500px;
  height: 500px;
}
.fox-card-views {
  padding: 0px 0x 0px 0px;
  position: relative;
}

.fox-card-view {
  position: relative;
  overflow: hidden;
}

.fox-card-view-trans-enter-from,
.fox-card-view-trans-show-from {
  opacity: 0;
}

.fox-card-view-trans-enter-active,
.fox-card-view-trans-show-active {
  display: block !important;
  position: absolute;
  top: 0px;
  z-index: 10;
}

.fox-card-view-trans-enter-to,
.fox-card-view-trans-show-to {
  animation: fox-card-view-in-slide-right 3330ms;
  -webkit-animation: fox-card-view-in-slide-right 3330ms;
  z-index: 120;
}

.fox-card-view-trans-leave-from,
.fox-card-view-trans-hide-from {
  /* 占位 */
}

.fox-card-view-trans-leave-active,
.fox-card-view-trans-hide-active {
}

.fox-card-view-trans-leave-to,
.fox-card-view-trans-hide-to {
  animation: fox-card-view-out 330ms;
  -webkit-animation: fox-card-view-out 330ms;
  z-index: 100;
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

/* 进场动画 */
@-webkit-keyframes fox-card-view-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fox-card-view-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
