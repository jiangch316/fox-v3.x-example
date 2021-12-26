<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-22 10:51:01
-->
<template>
    <div>
        <button class="my-button" @click="reset">重置输入框</button>
        <button class="my-button" @click="newNode">新增</button>
        <button class="my-button" @click="updateNode">更新</button>
        <button class="my-button" @click="showNode">查看</button>
        <button class="my-button" @click="clearNode">清空</button>
    </div>
    <div><input ref="input" type="text" :value="textVal" @change="onChange" @input="onInput" /></div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch, watchEffect } from 'vue'
import { Bus } from '@fox-js/fox'

export default defineComponent({
    //安装
    setup() {
        let bus = new Bus()
        //input引用
        let input = ref(null)
        const onInput = () => {
            let el: any = input.value
            bus.global.text.value = el.value
        }
        const onChange = () => {
            let el: any = input.value
            bus.global.text.value = el.value
        }

        //通过computed使用bus中的值
        let textVal = computed(() => {
            return bus.global.text.value
        })

        //监控
        watch([bus.global.text.value], (newVal, oldVal) => {
            console.info(`watch newValue${newVal}, oldValue:${oldVal}`)
        })
        //监控
        watchEffect(() => {
            let value = bus.global.text.value
            console.info(`watch effect value:${value}`)
        })

        const reset = () => {
            bus.global.text.value = ''
        }

        //新建节点
        const newNode = () => {
            //api方式创建单层节点
            bus.put('single_a', '单层api数据')
            //属性方式创建多层节点
            bus.single_b.value = '单层property数据'

            //api方式创建多层节点
            bus.put('leve_1_a', 'leve_2_a', '多层api数据')
            //属性方式创建多层节点（leve_2_b的数据节点）
            bus.leve_1_b.leve_2_b.value = '多层propery数据1'
            //属性方式创建多层节点（leve_2_b下面的节点）
            bus.leve_1_b.leve_2_b.leve_3_b.value = '多层propery数据2'
            //属性方式创建多层节点(leve_1_b上分支)
            bus.leve_1_b.leve_2_c.value = '多层propery数据3'
        }

        //更新次数
        let updateTime = 1
        //修改节点
        const updateNode = () => {
            //修改次数
            updateTime++
            //api方式更新单层节点
            bus.put('single_a', `单层api数据-${updateTime}`)
            //属性方式更新多层节点
            bus.single_b.value = `单层property数据-${updateTime}`

            //api方式更新多层节点
            bus.put('leve_1_a', 'leve_2_a', `多层api数据-${updateTime}`)
            //属性方式更新多层节点（leve_2_b的数据节点）
            bus.leve_1_b.leve_2_b.value = `多层propery数据1-${updateTime}`
            //属性方式更新多层节点（leve_2_b下面的节点）
            bus.leve_1_b.leve_2_b.leve_3_b.value = `多层propery数据2-${updateTime}`
            //属性方式更新多层节点(leve_1_b上分支)
            bus.leve_1_b.leve_2_c.value = `多层propery数据3-${updateTime}`
        }
        //查看节点
        const showNode = () => {
            //api方式查看单层节点
            let value = bus.get('single_a')
            console.info(`api方式更新单层节点 value:${value}`)

            //属性方式查看多层节点
            value = bus.single_b.value
            console.info(`单层property数据 value:${value}`)

            //api方式查看多层节点
            value = bus.get('leve_1_a', 'leve_2_a')
            console.info(`多层api数据 value:${value}`)

            //属性方式查看多层节点（leve_2_b的数据节点）
            value = bus.leve_1_b.leve_2_b.value
            console.info(`多层propery数据1 value:${value}`)

            //属性方式查看多层节点（leve_2_b下面的节点）
            value = bus.leve_1_b.leve_2_b.leve_3_b.value
            console.info(`多层propery数据2 value:${value}`)

            //属性方式查看多层节点(leve_1_b上分支)
            value = bus.leve_1_b.leve_2_c.value
            console.info(`多层propery数据3 value:${value}`)
        }
        //清空节点
        const clearNode = () => {
            //清空数据 api 只需要删除根节点
            bus.remove('single_a')

            //清空数据 api 只需要删除根节点
            bus.remove('leve_1_a')

            //清空数据 property 只需要删除根节点 设置undefined就代表删除节点数据
            bus.leve_1_b = undefined
        }

        return {
            input,
            textVal,
            onInput,
            onChange,
            reset,
            newNode,
            updateNode,
            showNode,
            clearNode
        }
    }
})
</script>
