<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 07:03:51
-->
<template>
    <div>Home</div>
    <div>
        <input ref="input" type="text" :value="inputText" @change="onChange" @input="onInput" />
    </div>
    <div>state信息:{{ inputText }}</div>
    <div>readonly信息:{{ readonlyState.inputText }}</div>
    <div>
        <button class="my-button" @click="onClick">测试</button>
    </div>
</template>
<script lang="ts">
import {
    defineComponent,
    getCurrentInstance,
    ref,
    toRef,
    toRefs,
    reactive,
    readonly,
    onMounted,
    onUnmounted
} from 'vue'
import { onFoxActivated, onFoxDeactivated, useRoute } from '@fox-js/fox'

export default defineComponent({
    props: {},
    //setup函数
    setup(props, context) {
        let route = useRoute()
        let instance = getCurrentInstance()
        let index = 0
        let state = reactive({ inputText: '' })

        let inputText = toRef<{ [propName: string]: any }, 'inputText'>(state, 'inputText')

        let readonlyState = readonly(state)

        // let stateRefs = toRefs(state)
        // let { inputText } = stateRefs

        onMounted(() => {
            console.info('>>>> on mounted(home)')
        })
        onUnmounted(() => {
            console.info('---- on unmounted(home)')
        })
        onFoxActivated(() => {
            console.info('>>>> on active(home)')
            console.info(route)
        })
        onFoxDeactivated(() => {
            console.info('---- on deactive(home)')
        })
        let input = ref(null)

        let onChange = () => {
            context.emit('update:modelValue', input.value)
        }
        let onInput = () => {
            context.emit('update:modelValue', input.value)
        }
        let onClick = () => {
            let proxy: any = instance.proxy
            console.info(proxy.$route)
            console.info('this is a click event')
            inputText.value = `文本-(${index++})`
            console.info(`state:${state['inputText']}`)
            console.info(`readonly:${readonlyState.inputText}`)
        }
        return {
            onChange,
            onInput,
            input,
            onClick,
            state,
            readonlyState,
            inputText
        }
    }
})
</script>
