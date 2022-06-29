<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 08:02:08
-->
<template>
  <div>About</div>
  <div><input type="text" ref="input" :value="modelValue" @change="onChange" @input="onInput" /></div>
  <button @click="onClick">测试</button>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { useRouter, onFoxActivated, onFoxDeactivated } from '@fox-js/fox'

export default defineComponent({
  props: {
    modelValue: {
      type: [String]
    }
  },
  setup(props, context) {
    onMounted(() => {
      console.info('>>>> on mounted(about)')
    })
    onUnmounted(() => {
      console.info('---- on unmounted(about)')
    })
    onFoxActivated(() => {
      console.info('>>>> on active(about)')
    })
    onFoxDeactivated(() => {
      console.info('---- on deactive(about)')
    })

    let input = ref(null)
    let onChange = () => {
      context.emit('update:modelValue', input.value)
    }
    let onInput = () => {
      context.emit('update:modelValue', input.value)
    }
    let onClick = () => {
      console.info('this is click event')
    }
    return {
      onChange,
      onInput,
      input,
      onClick
    }
  }
})
</script>
