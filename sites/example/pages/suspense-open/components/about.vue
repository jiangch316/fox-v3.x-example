<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 08:02:08
-->
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
// 定义属性
defineProps<{ modelValue: string }>()

onMounted(() => {
  console.info('>>>> on mounted(about)')
})
onUnmounted(() => {
  console.info('---- on unmounted(about)')
})

// 定义emits
const emit = defineEmits(['update:modelValue'])
const input = ref(null)
let onChange = () => {
  emit('update:modelValue', input.value)
}
const onInput = () => {
  emit('update:modelValue', input.value)
}
</script>

<template>
  <div>About</div>
  <div><input type="text" ref="input" :value="modelValue" @change="onChange" @input="onInput" /></div>
</template>

    