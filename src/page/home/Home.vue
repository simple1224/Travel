<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script>
// script写当前组件的逻辑
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import axios from 'axios'

export default {
  // 导出一个对象 写一个组件的名字
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      console.log(res)
    }
  },
   mounted(){
    this.getHomeInfo()
  },
};
</script>
<style>
</style>