<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 17:59:28
-->
<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  console.info(`>>>>> on mounted(panel)`)
})
onUnmounted(() => {
  console.info(`----- on unmounted(panel)`)
})

//  通过load模拟异步组件
const load = (): Promise<string> => {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('success')
    }, 5000)
  })
}
let res = await load()
console.info('获取结果:', res)
</script>

<template>
  <div>主面版</div>
  <div>
    <input type="text" />
  </div>
  <div>
    <fox-router-view :multi="false"></fox-router-view>
  </div>
</template>
