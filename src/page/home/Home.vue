<template>
  <!-- <div>
    <div>Home</div>
    <router-link to="./list">列表页</router-link>
  </div> -->
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
// script写当前组件的逻辑
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
  // 导出一个对象 写一个组件的名字
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper
  }
};
</script>
<style>
</style>