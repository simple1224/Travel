import Vue from 'vue'
import Router from 'vue-router'
// @表示src目录
import Home from '@/page/home/Home'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    /* 当用户访问根路径的时候，展示HelloWorld这个组件 */
    name: 'Home',
    component: Home
  }]
})
