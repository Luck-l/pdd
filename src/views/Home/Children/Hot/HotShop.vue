<template>
  <div>
    <div class="shop-container" v-if="homeshops.length > 0">
      <ul class="shop-list">
        <li class="shop-list-item" v-for="(shops,index) in homeshops" :key="index">
          <div class="list-item-img">
            <img :src="shops.imgURL" alt="" width="90%">
          </div>
          <div class="list-item-right">
            <div class="list-item-right-top">
               <span>
                <img :src="shops.imgURL1" alt="" width="20%">
                <span class="list-item-title">{{shops.title}}</span>
              </span>
              </div>
            <div class="list-item-right-bottom">
              <span class="list-item-title2">{{shops.name1}}</span>
              <span class="list-item-title2">{{shops.name2}}</span>
              <div class="bottom">
                <span class="list-price">{{shops.price}}</span>
                <span class="list-title">{{shops.name3}}</span>
                <span class="list-item-right-img">
                  <img :src="shops.img1" alt="">
                  <img :src="shops.img2" alt="">
                 </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "HotShop",
    computed:{
      ...mapState(["homeshops"])
    },
    mounted() {
      this.$store.dispatch("reqHomeShops")
    }
  }
</script>

<style scoped>
  .shop-container{
    position: relative;
    background-color: #fff;
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
  }
  .list-item-img{
    padding:10px;
    flex: 3;
  }
  .shop-list-item{
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    justify-content: center;
  }
  .list-item-right{
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex:3;
  }
  .list-item-title{
    height: 16px;
    line-height: 18px;
    font-size: 16px;
    vertical-align: top;

  }
  .list-item-right-img img{
    border-radius: 50%;
    width: 10%;
    margin-left: 30px;
  }
  .list-item-right-img img:nth-child(2){
    margin-left: -5px;
  }
  .list-item-right-top{
    height: 20px;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 100px;
  }
  .list-item-right-bottom{
    height: 100%;
    width: 100%;
  }
  .list-item-title2{
    background-color: rgba(255,87,6,.6);
    font-size: 12px;
    font-weight: lighter;
    margin-right: 5px;
  }
  .list-price{
    font-size: 16px;
    color: red;
  }
  .list-title{
    color: #9c9c9c;
    font-weight: 400;
    font-size: 12px;
    height: 20px;
    line-height: 20px;

  }
  .recommend{
    height: 100%;
    width: 100%;
    margin-bottom: 49px;
  }
</style>