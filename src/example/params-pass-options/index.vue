<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-30 09:49:30
-->
<template>
     <div>
        <button class="my-button" @click="toHome">go home</button>
        <button class="my-button" @click="toAbout">go about</button>
    </div>
     <div>
         <fox-router-view :multi=false></fox-router-view>
    </div>
</template>

<script>
import {FoxApp}  from './index' 
export default {
    //方法
    methods:{
        toHome(){
            //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
            this.$router.push('/home', {'target':'home'})
        },
        toAbout(){
            //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
            this.$router.push('/about', {'target':'about'})
        }
    },
    //创建后处理
    created(){
        //获取 fox
        let fox = this.$fox
        //安装路由
        FoxApp.install(fox)
    }
}
</script>