<template>
  <div>
    <!-- 单个组件动画用transition -->
    <transition>
        <solt></solt>
    </transition>
  </div>
</template>

<script>
export default {
    name:FadeAnimation
};
</script>

<style lang="stylus" scoped>
.v-enter,.v-leave-to
  opacity 0
.v-enter-active,.v-leave-active
  transition opacity .5s
</style>