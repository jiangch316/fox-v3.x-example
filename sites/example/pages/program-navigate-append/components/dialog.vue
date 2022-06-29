<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-13 20:16:03
-->
<template>
  <div class="my-dialog" :style="mStyle">
    <div class="my-dialog-content">
      <slot></slot>
    </div>
    <div class="my-dialog-footer">
      <button class="my-button" @click="back">返回</button>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from '@fox-js/fox'

export default defineComponent({
  //属性
  props: {
    top: {
      type: String as PropType<string>,
      required: false,
      default: '50px'
    }
  },
  //安装
  setup(props) {
    let router = useRouter()
    const back = () => {
      router.remove()
    }
    const mStyle = computed(() => {
      return {
        top: props.top
      }
    })
    return {
      back,
      mStyle
    }
  }
})
</script>
<style>
.my-dialog {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  transition: 0.3s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 3000;
}

.my-dialog .my-dialog-footer {
  width: 100%;
  height: 80px;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.my-dialog .my-dialog-footer .my-btton {
  width: 80px;
  height: 36px;
}
</style>
