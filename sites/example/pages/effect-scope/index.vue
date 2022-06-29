<script lang="ts" setup>
import { effectScope, ref, watch, watchEffect, getCurrentInstance } from 'vue'

let scope = effectScope()
let val = ref(0)
scope.run(() => {
  watch(val, () => console.log(val.value))
  watchEffect(() => console.log('value: ', val.value))
})

let start = () => {
  setInterval(() => {
    val.value++
    console.info(`修改:${val.value}`)
  }, 1000)
}
let stop = () => {
  scope.stop()
}
</script>

<template>
  <div>
    <button class="my-button" @click="start()">start</button>
    <button class="my-button" @click="stop()">stop</button>
  </div>
</template>
