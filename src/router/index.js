import Vue from 'vue'
import Router from 'vue-router'
// @表示src目录
import Home from '@/page/home/Home'
import City from '@/page/city/City'
import Detail from '@/page/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    /* 当用户访问根路径的时候，展示Home这个组件 */
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }]
})
