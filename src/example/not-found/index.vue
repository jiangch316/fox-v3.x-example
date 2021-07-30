<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:23:40
-->
<template>
    <div>Not Found</div>
</template>
<script lang="ts">
import { defineComponent, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'

export default defineComponent({
    setup() {
        onMounted(()=>{
            console.info('>>>> on mounted(not found)')
        })
        onUnmounted(()=>{
            console.info('---- on unmounted(not found)')
        })
        onActivated(()=>{
            console.info('>>>> on active(not found)')
        })
        onDeactivated(()=>{
            console.info('---- on deactive(not found)')
        })
    },
})
</script>