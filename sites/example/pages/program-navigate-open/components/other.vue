<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-21 00:00:22
-->
<template>
  <div>Other</div>
  <div><input ref="input" type="text" :value="modelValue" @change="onChange" @input="onInput" /></div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted, onUnmounted } from 'vue'
import { onFoxActivated, onFoxDeactivated, useRoute } from '@fox-js/fox'

export default defineComponent({
  //属性
  props: {
    modelValue: {
      type: [String]
    }
  },
  //setup函数
  setup(props, context) {
    let route = useRoute()
    onMounted(() => {
      console.info('>>>> on mounted(other)')
    })
    onUnmounted(() => {
      console.info('---- on unmounted(other)')
    })
    onFoxActivated(() => {
      console.info('>>>> on active(other)')
      console.info(route)
    })
    onFoxDeactivated(() => {
      console.info('---- on deactive(other)')
    })
    let input = ref(null)
    let instance = getCurrentInstance()
    let onChange = () => {
      context.emit('update:modelValue', input.value)
    }
    let onInput = () => {
      console.info(instance)
      context.emit('update:modelValue', input.value)
    }
    return {
      onChange,
      onInput,
      input
    }
  }
})
</script>
