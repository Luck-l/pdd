<template>
  <div class="search">
   <search-nav></search-nav>
    <div class="shop">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="(item,index) in array" :key="index" >
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper">
        <ul>
          <li class="shops-li">
            <div class="shops-title">
              <h4>热门分类</h4>
              <a href="">查看更多></a>
            </div>
            <ul class="shops-items">
              <li v-for="(item,index) in shops" :key="index">
              <img :src="item.imgURL" alt="">
              <span>{{item.name}}</span>
              </li>
            </ul>


          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchNav from "./children/SearchNav";
  import BScroll from "better-scroll"
  export default {
    name: "Search",
    data(){
      return{
        array:[{name:"推荐"},{name:"女装"},{name:"美妆"},{name:"运动"},{name:"数码"},{name:"鞋包"},{name:"食品"},{name:"百货"},{name:"洗护"},{name:"母婴"},{name:"内衣"},{name:"男装"},{name:"生鲜"},{name:"家纺"},{name:"家装"},{name:"车品"},{name:"手机"},{name:"电器"},{name:"健康"},{name:"图书"},{name:"充值"},{name:"海淘"},{name:"品牌"},],
        shops:[
            {imgURL:require("../../assets/img/search-shops/search1.jpg"),name:"防嗮袖套"},
          {imgURL:require("../../assets/img/search-shops/search2.jpg"),name:"连衣裙"},
          {imgURL:require("../../assets/img/search-shops/search3.jpg"),name:"大码女鞋"},
          {imgURL:require("../../assets/img/search-shops/search4.jpg"),name:"女款小白鞋"},
          {imgURL:require("../../assets/img/search-shops/search6.jpg"),name:"之家彩妆"},
          {imgURL:require("../../assets/img/search-shops/search7.jpg"),name:"文胸套装"},
          {imgURL:require("../../assets/img/search-shops/search8.jpg"),name:"烘培"},
          {imgURL:require("../../assets/img/search-shops/search9.jpg"),name:"办公设备"},
          {imgURL:require("../../assets/img/search-shops/search13.jpg"),name:"民间运动"},
          {imgURL:require("../../assets/img/search-shops/search10.jpg"),name:"女士泳衣"},
          {imgURL:require("../../assets/img/search-shops/search11.jpg"),name:"男士泳衣裤"},
          {imgURL:require("../../assets/img/search-shops/search12.jpg"),name:"汽车"},
          {imgURL:require("../../assets/img/search-shops/search1.jpg"),name:"防嗮袖套"},
          {imgURL:require("../../assets/img/search-shops/search2.jpg"),name:"连衣裙"},
          {imgURL:require("../../assets/img/search-shops/search3.jpg"),name:"大码女鞋"},
          {imgURL:require("../../assets/img/search-shops/search4.jpg"),name:"女款小白鞋"},
          {imgURL:require("../../assets/img/search-shops/search6.jpg"),name:"之家彩妆"},
          {imgURL:require("../../assets/img/search-shops/search7.jpg"),name:"文胸套装"},
          {imgURL:require("../../assets/img/search-shops/search8.jpg"),name:"烘培"},
          {imgURL:require("../../assets/img/search-shops/search9.jpg"),name:"办公设备"},
          {imgURL:require("../../assets/img/search-shops/search13.jpg"),name:"民间运动"},
          {imgURL:require("../../assets/img/search-shops/search10.jpg"),name:"女士泳衣"},
          {imgURL:require("../../assets/img/search-shops/search11.jpg"),name:"男士泳衣裤"},
          {imgURL:require("../../assets/img/search-shops/search12.jpg"),name:"汽车"},]
      }
    },
    components:{
      SearchNav
    },
    methods:{
      _initAScroll(){
        new BScroll(".menu-wrapper",{
          scrollY:true,
          click:true
        })
      },
      _initBScroll(){
        new BScroll(".shop-wrapper",{
          scrollY: true,
          click:true
        })
      }
    },
    mounted() {
     this._initAScroll()
      this._initBScroll()
    }

  }
</script>

<style scoped>
  .search{
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .shop{
    display: flex;
    position: absolute;
    top: 49px;
    bottom: 49px;
    width: 100%;
    overflow: hidden;
  }
  .menu-wrapper{
    background-color: #e0e0e0;
    width: 80px;
  }
    .menu-item{
    width: 100%;
    height: 60px;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    color: #666666;
    position: relative;
  }
  
  /*右边*/
  .shop-wrapper{
    flex: 1;
    background-color: #ffffff;
  }
  .shops-title{
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    height: 44px;
    align-items: center;
    justify-content: space-between;
    color: #999999;
  }
  .shops-title a{
    color: #999999;
    text-decoration:none;
    font-weight: lighter;
  }
  .shops-items{
    display: flex;
    flex-wrap: wrap;
  }
  .shops-items li{
    display: flex;
    flex-direction: column;
    width: 33.3%;
    height: 90px;
    justify-content: center;
    align-items: center;
    color: #666666;
    font-weight: lighter;
    font-size: 14px;
  }
  .shops-items img{
    width: 60%;
    height: 60%;
    margin-bottom: 5px;
  }
  .shops-li{
    list-style: none;
  }
  .shop-items{
    list-style: none;
  }

  .current{
    color: #e02e24;
  }
  .current::before{
    content: "";
    background-color: #e02e24;
    width: 2px;
    height: 30px;
    position: absolute;
    left: 0;
  }
</style>