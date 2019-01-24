<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_600x330_35e2f813.jpg"
      >
      <div class="banner-info">
        <div class="banner-title">华清宫(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return{
      showGallary:false,
      imgs: [
      "http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg",
      "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg"
    ]
    }
  },
  components: {
    CommonGallary
  },
  methods:{
    handleBannerClick(){
      this.showGallary = true
    },
    handleGallaryClose(){
      this.showGallary = false
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    color: #fff
    // 从上到下的渐变
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      font-size: 0.32rem
      padding: 0 0.2rem
    .banner-number
      height: 0.32rem
      line-height: 0.32rem
      margin-top: 0.14rem
      padding: 0 0.4rem
      border-radius: 0.2rem
      background: rgba(0, 0, 0, 0.8)
      font-size: 0.24rem
      .banner-icon
        font-size: 0.24rem
        margin-right: 0.2rem
</style>
