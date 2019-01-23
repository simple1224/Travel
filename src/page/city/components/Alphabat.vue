<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
    letter: String
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
      // ['A','B','C']
    }
  },
  data() {
    // 定义标识位
    // 为了提高性能  把startY定义在这里 不用每一次滑动时计算
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  // 当页面的数据被更新时 同时页面完成自己的渲染之后 updated这个钩子函数会被执行
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    // 当点击字母时 会接收一个e的事件对象
    //this.$emit()向外触发事件 事件名称change
    //在City实例中 监听change事件
    handleLetterClick(e) {
      // console.log(e.target.innerText)
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      //计算A到top的距离 offsetTop是A元素到list顶部的距离 74
      // clientY 是到html顶部的距离 79是页面header的高度
      // Math.floor()向下取整
      // 通过timer做函数截留的作用  降低handleTouchMove函数调用的频率 提高性能
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
          // console.log(startY)
          // console.log(touchY)
          // console.log(index)
        },16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: 0.4rem
  .item
    line-height: 0.4rem
    text-align: center
    color: $bgColor
</style>
