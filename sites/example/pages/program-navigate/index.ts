/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:38:12
 */

//路由表
import panel from './components/panel.vue'
import home from './components/home.vue'
import panel2 from './components/panel2.vue'
import about from './components/about.vue'
import notFound from '../not-found/index.vue'

// 路由表
let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: panel,
    children: [
      {
        path: '',
        components: { _sub_root_1: home }
      }
    ]
  },
  {
    path: '/about',
    component: panel2,
    children: [
      {
        path: '',
        components: { _sub_root_2: about }
      }
    ]
  }
]

export let FoxApp = {
  /***
   * 安装
   */
  install(fox: any) {
    //注册404路由
    fox.router.setNotFoundRoute({
      path: '/notFound',
      component: notFound
    })
    //加入路由
    fox.router.addRoutes(routes)
  }
}
