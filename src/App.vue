<template>
  <div id="app">
    <Main-tab-bar v-show="this.$route.meta.showBottomTabBar"></Main-tab-bar>
    <router-view/>
  </div>
</template>

<script>

  import "./assets/iconfont/style.css"

  import MainTabBar from "./components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";
  #app{
    height: 100%;
    width: 100%;
    background-color: #eeeeee;
  }
</style>
