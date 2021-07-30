/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-28 10:23:05
 */

//路由表
let routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:()=>import('./components/home.vue'),
    },
    {
        path:'/about',
        component:()=>import('./components/about.vue'),
    },
]
export let FoxApp = {

    /***
     * 安装
     */
    install(fox:any){
        //设置404页面
        fox.router.setNotFoundRoute( {
            path:'/notFound',
            component: ()=>import('../not-found/index.vue'),
        },)
        //加入路由
        fox.router.addRoutes(routes)
    }

} 