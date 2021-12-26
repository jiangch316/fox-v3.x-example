<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-26 14:09:43
-->
<template>
    <div>
        <div>this is a dog</div>
        <input :value="val" />
    </div>
</template>
<script>
export default {
    //属性
    props: {
        val: {
            type: String
        }
    },
    //加载后处理
    mounted() {
        let route = this.$route
        console.info(`mounted dog route params:${JSON.stringify(route.params)}`)
    }
}
</script>
