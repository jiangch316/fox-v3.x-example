<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-26 10:38:00
-->
<template>
  <div>this is cat</div>
  <input :value="val" />
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from '@fox-js/fox'

export default defineComponent({
  props: {
    val: {
      type: String
    }
  },
  setup() {
    let route = useRoute()
    //加载后处理
    onMounted(() => {
      console.info(`mounted hook params:${JSON.stringify(route?.params ?? {})}`)
    })
  }
})
</script>
