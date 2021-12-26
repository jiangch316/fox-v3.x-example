<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 08:02:08
-->
<template>
    <div>About</div>
    <div><input type="text" ref="input" :value="textValue" @change="onChange" @input="onInput" /></div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from '@fox-js/fox'

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

        let innerValue = ref<string>('')
        let route = useRoute()
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
