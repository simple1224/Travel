import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}
// 创建一个仓库 state存放共用的数据
export default new Vuex.Store({
  state: state,
  mutations: mutations
  // state: {
  //   city: defaultCity
  // }
  // changeCity接收两个参数 ctx上下文 city是传递过来的参数
  // actions一般是用于异步处理数据 这里没有可以直接调用mutations
  // actions: {
  //   changeCity(ctx, city) {
  //     console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },

  // mutations: {
  //   changeCity(state, city) {
  //     // console.log(city)
  //     state.city = city
  //     try {
  //       localStorage.city = city
  //     } catch (e) {}
  //   }
  // }
})
