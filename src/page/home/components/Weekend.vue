<template>
  <div>
    <div class="recommend-tile">周末去哪</div>
    <ul>
      <!-- border-bottom 1像素边框的使用 -->
      <li
        class="item border-bottom"
        v-for="item of recommendList"
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
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题公园"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题公园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题公园"
        }
      ]
    };
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
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 33.9%
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