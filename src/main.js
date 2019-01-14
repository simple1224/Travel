// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastCilck from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
//* fastClick解决移动端点击延迟300ms的问题 */
Vue.config.productionTip = false
fastCilck.attach(document.body)

/* eslint-disable no-new */
new Vue({
  /* 这里挂载的是index.html id="app"的标签 */
  el: '#app',
  router,
  /* router:router es6写法：当键值相同时 可以省略一个 */
  /* compontents是在这里定义一个局部组件 在这里注册一下 */
  components: {App},
  template: '<App/>'
})
