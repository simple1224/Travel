<template>
  <div>
    <div class="recommend-tile">周末去哪</div>
    <ul>
      <!-- border-bottom 1像素边框的使用 -->
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgUrl"
          >
        </div>
        <div class="item-infor">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    list:Array
  },
  data() {
    return {

    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-tile
  line-height: 0.8rem
  background: #ccc
  text-indent: 0.2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-infor
  padding: 0.1rem
  .item-title
    line-height: 0.54rem
    font-size: 0.32rem
    ellipsis()
  .item-desc
    line-height: 0.4rem
    color: #ccc
    ellipsis()
</style>