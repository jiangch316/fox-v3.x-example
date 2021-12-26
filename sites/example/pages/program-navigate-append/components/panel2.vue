<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 17:59:28
-->
<template>
    <div>主面版2</div>
    <div>
        <input type="text" />
    </div>
    <div>
        <fox-router-view :multi="false"></fox-router-view>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { onFoxActivated, onFoxDeactivated } from '@fox-js/fox'

export default defineComponent({
    setup() {
        onMounted(() => {
            console.info(`>>>>> on mounted(panel 2)`)
        })
        onUnmounted(() => {
            console.info(`----- on unmounted(panel 2)`)
        })
        onFoxActivated(() => {
            console.info(`>>>>> on active(panel 2)`)
        })
        onFoxDeactivated(() => {
            console.info(`----- on deactive(panel 2)`)
        })
    }
})
</script>
