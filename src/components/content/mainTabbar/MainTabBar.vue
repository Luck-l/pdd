<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" class="icon-home normal" src="" alt="">
      <img slot="item-icon-active" class="icon-home active" src="" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/recommend">
      <img slot="item-icon" class="icon-bookmarks normal" src="" alt="">
      <img slot="item-icon-active" class="icon-bookmarks active" src="" alt="">
      <div slot="item-text">推荐</div>
    </tab-bar-item>
    <tab-bar-item path="/search">
      <img slot="item-icon" class="icon-search normal" src="" alt="">
      <img slot="item-icon-active" class="icon-search active" src="" alt="">
      <div slot="item-text">搜索</div>

    </tab-bar-item>
<!--    <tab-bar-item path="/chat">-->
<!--      <img slot="item-icon" class="icon-bubbles normal" src="" alt="">-->
<!--      <img slot="item-icon-active" class="icon-bubbles active" src="" alt="">-->
<!--      <div slot="item-text">聊天</div>-->
<!--    </tab-bar-item>-->
    <tab-bar-item path="/me">
      <img slot="item-icon" class="icon-user-tie normal" src="" alt="">
      <img slot="item-icon-active" class="icon-user-tie active" src="" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .active{
    color: red;
    font-size: 20px;
  }
  .normal{
    font-size: 20px;
  }

</style>
