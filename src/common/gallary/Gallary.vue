<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item,index) in imgs"
          :key="index"
        >
          <img
            class="gallary-img"
            :src="item"
          >
        </swiper-slide>
        <!-- page设置 -->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        // 以下两个属性  可以解决dom结构改变时 重新刷新 解决swiper宽度计算问题
        observeParents: true,
        observer: true
      }
    };
  },
  methods:{
    handleGallaryClick(){
      // 向外触发close函数  在banner内监听事件
      console.log("点击退出")
      this.$emit('close')
    }
  }
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wrapper
    // overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>