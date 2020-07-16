<template>
  <div class="hot">
<!--    轮播图-->
    <div class="mt">
    <mt-swipe :auto="3000">
      <mt-swipe-item><a href="#"><img src="../../../../assets/img/hot-swiper/swiper01.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item><a href="#"><img src="../../../../assets/img/hot-swiper/swiper02.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item><a href="#"><img src="../../../../assets/img/hot-swiper/swiper03.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item><a href="#"><img src="../../../../assets/img/hot-swiper/swiper04.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item><a href="#"><img src="../../../../assets/img/hot-swiper/swiper05.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item><a href="#"><img src="../../../../assets/img/hot-swiper/swiper06.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item><a href="#"><img src="../../../../assets/img/hot-swiper/swiper07.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item><a href="#"><img src="../../../../assets/img/hot-swiper/swiper08.jpg" alt=""></a></mt-swipe-item>
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

    export default {
      name: "Hot",
      components: {
        HotNav,
        HotShop
      },

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