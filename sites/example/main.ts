/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-10 11:24:39
 */
import { createApp } from 'vue'
import { createFox } from '@fox-js/fox'
import App from './App.vue'

//创建fox
let fox = createFox()
//创建vue app
let app = createApp(App)
//注册fox插件
app.use(fox)
//加载
app.mount('#app')
