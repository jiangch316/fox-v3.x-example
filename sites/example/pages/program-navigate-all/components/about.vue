<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 08:02:08
-->
<template>
    <div>About</div>
    <div><input type="text" ref="input" :value="modelValue" @change="onChange" @input="onInput"></div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
    props:{
        modelValue:{
            type:[String]
        }
    },
    setup(props, context) {
        onMounted(()=>{
            console.info('>>>> on mounted(about)')
        })
        onUnmounted(()=>{
            console.info('---- on unmounted(about)')
        })

        let input = ref(null)
        let onChange = ()=>{
            context.emit('update:modelValue', input.value)
        }
        let onInput = ()=>{
            context.emit('update:modelValue', input.value)
        }
        return {
            onChange,
            onInput,
            input
        }
    },
})
</script>

    