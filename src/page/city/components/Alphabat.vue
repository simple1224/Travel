<template>
  <div>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet"
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
  botttom: 0
  width: 0.4rem
  height 100%
  overflow hidden
  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
