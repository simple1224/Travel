<template>
  <div class="wrapper">
    <swiper
      :options="swiperOption"
      v-if="showSwiper"
    >
      <swiper-slide
        v-for="item of list"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
        >
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  //子组件定义data必须是函数 下面是es6写法
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true //支持循环轮播
      }
      // swiperList: [
      //   {
      //     id: '0001',
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1609/47/0cfdc871ac183702.jpg_750x200_f6896acd.jpg"
      //   },
      //   {
      //     id: '0002',
      //     imgUrl:
      //       "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/27a88908b3b083021ad409770384f82c.jpg_750x200_50372dcf.jpg"
      //   }
      // ]
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrapper
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background: #eee
  /* 设置宽高比例为31.25% */
  .swiper-img
    width: 100%
</style>
