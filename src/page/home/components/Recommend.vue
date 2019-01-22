<template>
  <div>
    <div class="recommend-tile">热销推荐</div>
    <ul>
      <!-- border-bottom 1像素边框的使用 -->
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img
          class="item-img"
          :src="item.imgUrl"
        >
        <div class="item-infor">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    list:Array
  },
  data() {
    return{
    //     recommendList: [
    //   {
    //     id: "0001",
    //     imgUrl:
    //       "http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg",
    //     title: "大连圣亚海洋世界",
    //     desc: "浪漫大连站，浪漫的海洋主题公园"
    //   },
    //   {
    //     id: "0002",
    //     imgUrl:
    //       "http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg",
    //     title: "大连圣亚海洋世界",
    //     desc: "浪漫大连站，浪漫的海洋主题公园"
    //   },
    //   {
    //     id: "0003",
    //     imgUrl:
    //       "http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg",
    //     title: "大连圣亚海洋世界",
    //     desc: "浪漫大连站，浪漫的海洋主题公园"
    //   }
    // ],
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-tile
  margin-top: 0.2rem
  line-height: 0.8rem
  background: #ccc
  text-indent: 0.2rem
.item
  display: flex
  height: 1.9rem
  overflow: hidden
.item-img
  width: 1.7rem
  height: 1.7rem
  padding: 0.1rem
.item-infor
  display: 1
  padding: 0.1rem
  min-width: 0
  .item-title
    line-height: 0.54rem
    font-size: 0.32rem
    ellipsis()
  .item-desc
    line-height: 0.4rem
    color: #ccc
    ellipsis()
.item-button
  line-height: 0.44rem
  margin-top: 0.16rem
  background: #ff9300
  padding: 0 0.2rem
  border-radius: 0.1rem
  color: #fff
</style>