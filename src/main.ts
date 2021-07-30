/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-10 11:24:39
 */
import { createApp } from 'vue'
import { createFox } from './assets/libs/fox-v3.0.0/index'
// import { createFox } from './core/index'
import './assets/libs/fox-v3.0.0/index.css'
import App from './App.vue'

//创建fox
let fox = createFox()
//创建vue app
let app = createApp(App)
//注册fox插件
app.use(fox)
//加载
app.mount('#app')
