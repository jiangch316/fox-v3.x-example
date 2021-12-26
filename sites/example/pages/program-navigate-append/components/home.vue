<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 07:03:51
-->
<template>
    <div>Home</div>
    <div><input ref="input" type="text" :value="modelValue" @change="onChange" @input="onInput" /></div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted, onUnmounted } from 'vue'
import { onFoxActivated, onFoxDeactivated } from '@fox-js/fox'

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
        onFoxActivated(() => {
            console.info('>>>> on active(home)')
        })
        onFoxDeactivated(() => {
            console.info('---- on deactive(home)')
        })
        let input = ref(null)
        let instance = getCurrentInstance()
        let onChange = () => {
            context.emit('update:modelValue', input.value)
        }
        let onInput = () => {
            console.info(instance)
            context.emit('update:modelValue', input.value)
        }
        return {
            onChange,
            onInput,
            input
        }
    }
})
</script>
