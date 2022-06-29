<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 07:03:51
-->
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
// 定义属性
defineProps<{ modelValue: string }>()
onMounted(() => {
  console.info('>>>> on mounted(home)')
})
onUnmounted(() => {
  console.info('---- on unmounted(home)')
})

// 定义事件
const emit = defineEmits(['update:modelValue'])
let input = ref(null)
let onChange = () => {
  emit('update:modelValue', input.value)
}
let onInput = () => {
  emit('update:modelValue', input.value)
}
</script>

<template>
  <div>Home</div>
  <div><input ref="input" type="text" :value="modelValue" @change="onChange" @input="onInput" /></div>
</template>

