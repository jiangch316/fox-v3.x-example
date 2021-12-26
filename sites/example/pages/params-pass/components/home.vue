<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 07:03:51
-->
<template>
    <div>Home</div>
    <div><input ref="input" type="text" :value="textValue" @change="onChange" @input="onInput" /></div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from '@fox-js/fox'

export default defineComponent({
    //属性
    props: {
        modelValue: {
            type: [String]
        }
    },
    //setup函数
    setup(props, context) {
        onMounted(() => {
            console.info('>>>> on mounted(home)')
        })
        onUnmounted(() => {
            console.info('---- on unmounted(home)')
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
