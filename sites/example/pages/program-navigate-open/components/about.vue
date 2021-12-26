<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 08:02:08
-->
<template>
    <div>About</div>
    <div><input type="text" ref="input" :value="modelValue" @change="onChange" @input="onInput" /></div>
    <div>
        <button class="my-button" @click="onClick">测试</button>
    </div>
</template>
<script lang="ts">
import {
    defineComponent,
    ref,
    unref,
    reactive,
    watchEffect,
    watch,
    onMounted,
    onUnmounted,
    getCurrentInstance
} from 'vue'
import { onFoxActivated, onFoxDeactivated, useRoute } from '@fox-js/fox'

export default defineComponent({
    props: {
        modelValue: {
            type: [String]
        }
    },
    setup(props, context) {
        let route = useRoute()
        let instance = getCurrentInstance()
        onMounted(() => {
            console.info('>>>> on mounted(about)')
        })
        onUnmounted(() => {
            console.info('---- on unmounted(about)')
        })
        onFoxActivated(() => {
            console.info('>>>> on active(about)')
            console.info(route)
        })
        onFoxDeactivated(() => {
            console.info('---- on deactive(about)')
        })

        let input = ref(null)
        let onChange = () => {
            context.emit('update:modelValue', input.value)
        }
        let onInput = () => {
            context.emit('update:modelValue', input.value)
        }

        let one = reactive({
            name: 'jiangcheng'
        })
        let two = ref('hello')
        let three = ref(1)

        watchEffect(() => {
            console.info(`1.one:${one.name}`)
            console.info(`1.two:${two.value}`)
            console.info(`1.three:${three.value}`)
            two.value = one.name
            console.info(`2.one:${one.name}`)
            console.info(`2.two:${two.value}`)
            console.info(`2.three:${three.value}`)
        })

        watch(
            () => {
                console.info('----- watch one-----')
                return one
            },
            newVal => {
                console.info('---------------')
                console.info(one.name)
                console.info(newVal.name)
            }
        )

        let index = 0
        let onClick = () => {
            let proxy: any = instance.proxy
            console.info(proxy.$route)
            console.info('this is a click event')
            // two.value = `hello,index:${index++}`
            three.value = index++
        }
        return {
            onChange,
            onInput,
            input,
            onClick
        }
    }
})
</script>
