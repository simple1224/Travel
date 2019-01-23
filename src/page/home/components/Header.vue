<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe611;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe603;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.city}} -->
        <!-- {{this.$store.state.city}} -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from "vuex";
// script写当前组件的逻辑
export default {
  // 导出一个对象 写一个组件的名字
  name: "HomeHeader",
  // props: {
  //   city: String
  // }
  // ...mapState展开运算符 把vuex内的数据映射到这个组件computed里
  computed: {
    ...mapState(['city'])
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
// @import "~@/assets/styles/varibles.styl";
// @import "../../../assets/styles/varibles.styl";
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
    width: 0.64rem
    float: left
    .back-icon
      text-align: center
      font-size: 0.4rem
  .header-input
    flex: 1
    height: 0.64rem
    line-height: 0.64rem
    background: #fff
    margin-top: 0.12rem
    margin-left: 0.2rem
    border-radius: 0.1rem
    color: #ccc
    padding-left: 0.2rem
  .header-right
    min-width: 1.04rem
    padding: 0 0.1rem
    float: rigth
    text-align: center
    color: #fff
    .arrow-icon
      font-size: 0.24rem
      margin-left: -0.04rem
</style>