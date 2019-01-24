<template>
  <div id="app">
    <!--  -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- router-view显示的是当前路由地址所对应的内容 即HelloWorld组件-->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
