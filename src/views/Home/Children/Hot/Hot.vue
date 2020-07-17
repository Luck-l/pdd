<template>
  <div class="hot">
<!--    轮播图-->
    <div class="mt">
    <mt-swipe :auto="3000" v-if="homecasual.length > 0">
      <mt-swipe-item v-for="(casual,index) in homecasual" :key="index"><a href="#"><img :src="casual.imgURL" alt=""></a></mt-swipe-item>
    </mt-swipe>
    </div>

      <hot-nav></hot-nav>
      <hot-shop></hot-shop>
  </div>
</template>

<script>
  import Vue from "vue"
  import {Swipe, SwipeItem} from "mint-ui"
  import "mint-ui/lib/style.css"
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  import HotNav from "./HotNav";
  import HotShop from "./HotShop";

  import {
      mapState
  } from  "vuex"

    export default {
      name: "Hot",
      components: {
        HotNav,
        HotShop
      },
      computed:{
        ...mapState(["homecasual"])
      },
      mounted() {
        //请求轮播图的数据
        this.$store.dispatch("reqHomeCasual")
      }

    }
</script>

<style scoped>
  .hot{
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  }
  .mt {
    width: 100%;
    height: 200px;
  }
  .mt img{
    width: 100%;
    height: 100%;
  }


</style>