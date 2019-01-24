<template>
  <div>
    <router-link
      tag="div"
      class="header-abs"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe611;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe611;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        console.log("长度超过60");
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {opacity:opacity};
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
      //   console.log(document.documentElement.scrollTop);
    }
  },
  activated() {
    //   绑定scroll事件 一旦这个函数执行 对应的handleScroll函数就会执行
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: 0.2rem
  top: 0.2rem
  width: 0.8rem
  height: 0.8rem
  line-height: 0.8rem
  text-align: center
  border-radius: 0.4rem
  background: rgba(0, 0, 0, 0.8)
  .header-abs-back
    color: #fff
    font-size: 0.4rem
.header-fixed
  position: fixed
  top: 0
  right: 0
  left: 0
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  background: $bgColor
  font-size: 0.32rem
  color: #fff
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff
</style>
