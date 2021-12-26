<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-26 14:09:37
-->
<template>
  <div>
    <div>this is a cat</div>
    <div><input :value="val" /></div>
  </div>
</template>
<script>
export default {
  props: {
    val: {
      type: String
    }
  },
  mounted() {
    let route = this.$route
    console.info(`mounted cat route params:${JSON.stringify(route.params)}`)
  }
}
</script>