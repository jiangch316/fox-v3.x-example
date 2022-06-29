<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 08:02:08
-->
<template>
  <div>About</div>
  <div>
    <input type="text" :value="id" />
    <input type="text" ref="input" :value="textValue" @change="onChange" @input="onInput" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from '@fox-js/fox'

export default defineComponent({
  props: {
    modelValue: {
      type: [String]
    },
    id: {
      type: String
    }
  },
  setup(props, context) {
    let route = useRoute()
    onMounted(() => {
      console.info(`>>>> on mounted(about) params:${JSON.stringify(route?.params ?? {})}`)
    })
    onUnmounted(() => {
      console.info('---- on unmounted(about)')
    })

    let innerValue = ref<string>('')
    if (route && route.params) {
      innerValue.value = route.params['target']
    }

    let textValue = computed(() => {
      return innerValue.value ?? props.modelValue
    })

    let input = ref(null)
    let onChange = () => {
      let val = ''
      let inputNode: any = input.value
      if (inputNode) {
        val = inputNode.value ?? ''
      }
      innerValue.value = val
      context.emit('update:modelValue', val)
    }
    let onInput = () => {
      let val = ''
      let inputNode: any = input.value
      if (inputNode) {
        val = inputNode.value ?? ''
      }
      innerValue.value = val
      context.emit('update:modelValue', val)
    }
    return {
      onChange,
      onInput,
      input,
      textValue
    }
  }
})
</script>
