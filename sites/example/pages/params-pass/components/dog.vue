<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-26 10:37:50
-->
<template>
  <div>this is a dog</div>
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
    onMounted(() => {
      console.info(`on mounted params:${JSON.stringify(route?.params ?? {})}`)
    })
  }
})
</script>
