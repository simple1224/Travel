<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
            >
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
    list:Array
  },
  data() {
    return {

      swiperOption:{
        autoplay:false
      }
      // iconList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
      //     desc: "热门景是大叔大叔大叔的对方地方的说法是十分大方的点"
      //   },
      //   {
      //     id: "0002",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
      //     desc: "文化古迹"
      //   },
      //   {
      //     id: "0003",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
      //     desc: "演出"
      //   },
      //   {
      //     id: "0004",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
      //     desc: "一日游"
      //   },
      //   {
      //     id: "0005",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
      //     desc: "西安必游"
      //   },
      //   {
      //     id: "0006",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
      //     desc: "动植物园"
      //   },
      //   {
      //     id: "0007",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif",
      //     desc: "年终大促"
      //   },
      //   {
      //     id: "0008",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
      //     desc: "兵马俑"
      //   },
      //   {
      //     id: "0009",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
      //     desc: "泡温泉"
      //   }
      // ]
    };
  },
  computed:{
      pages (){
          const pages = []
          this.list.forEach((item,index)=>{
            const page = Math.floor(index/8)
            if(!pages[page]){
              pages[page] = []
            }
            pages[page].push(item)
          })
          return pages
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    width: 25%
    height: 0
    float: left
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: 0.44rem
      line-height: 0.44rem
      color: $darkTextColor
      text-align: center
      ellipsis()

</style>