<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-29 23:41:25
-->
<template>
  <div>About</div>
  <div>
    <input type="text" :value="id" />
    <input type="text" ref="input" :value="textValue" @change="onChange" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    }
  },
  //数据
  data() {
    return {
      innerValue: ''
    }
  },
  //计算
  computed: {
    //text value
    textValue() {
      return this.innerValue
    }
  },
  //方法
  methods: {
    //on change
    onChange() {
      this.innerValue = this.$refs.input.value
    },
    //on input
    onInput() {
      this.innerValue = this.$refs.input.value
    }
  },
  //加载后处理
  mounted() {
    let route = this.$route
    if (route.params) {
      this.innerValue = route.params['target']
    }
  }
}
</script>
