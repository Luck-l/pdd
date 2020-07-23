<template>
  <div class="search">
   <search-nav :isShowSearchPanel="isShowSearchPanel"></search-nav>
    <div class="shop"  >
      <div class="menu-wrapper">
        <ul class="leftUl " ref="menuParent" >
          <div >
          <li class="menu-item"
              v-for="(item,index1) in array"
              :key="index1"
              :class="{current:index1 === currentIndex}"
              @click="clickLeftItem(index1)"
              ref="menuList"
          >
            <span>{{item.name}}</span>
          </li>
          </div>
        </ul>
      </div>
      <div class="shop-wrapper">
      <ul ref="shopsLis">
        <li class="shops-li" v-for="(item,index1) in array" :key="index1">
          <div class="shops-title">
            <h4>{{item.name}}</h4>
            <a href="">查看更多></a>
          </div>
          <ul class="shops-items">
            <li v-for="(item,index2) in shops" :key="index2">
              <img :src="item.imgURL" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </li>


      </ul>
    </div>

    </div>
      //搜索面板
    <search-panel v-if="isShow" :isShowSearchPanel="isShowSearchPanel"></search-panel>
  </div>
</template>

<script>
  import SearchNav from "./children/SearchNav";
  import SearchPanel from "./children/SearchPanel";
  import BScroll from "better-scroll"
  import {mapState} from "vuex"
  export default {
    name: "Search",
    data(){
      return{
        scrollY:0, //记录右边lis的滚动的距离
        shopsLisTop:[], //记录右边lis的高度
        isShow:false,//设置搜索面板的显示
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
          {imgURL:require("../../assets/img/search-shops/search12.jpg"),name:"汽车"},],
        leftscroll:{},
        rightscroll:{}

      }
    },
    components:{
      SearchNav,
      SearchPanel,

    },
    computed:{
      ...mapState(["searchnav"]),
      ...mapState(["searchshops"]),

      currentIndex(){
        return this.shopsLisTop.findIndex((lisTop,index1) =>{
          // this.leftScroll(index1)
          return this.scrollY>= lisTop && this.scrollY < this.shopsLisTop[index1+1]

        })
      },

    },
    methods:{
      isShowSearchPanel(flag){
        this.isShow = flag
      },
      //左边导航条的滚动
      _initAScroll(){
        this.left = new BScroll(".menu-wrapper",{
          scrollY:true,
          click:true,
          probeType: 3
        })
      },
      //右边导航条的滚动
      _initBScroll(){
        this.rightscroll = new BScroll(".shop-wrapper",{
          scrollY: true,
          click:true,
          probeType:3
        }),
        this.rightscroll.on("scroll",(pos)=>{
          this.scrollY = Math.abs(pos.y);
        })

      },
      //计算右边lis的高度并叠加
      _initShopsLisTop(){
        const tempList = []
        let LisTop = 0
        tempList.push(LisTop)
        let allLis = this.$refs.shopsLis.getElementsByClassName("shops-li")
        Array.prototype.slice.call(allLis).forEach((li) =>{
          LisTop +=li.clientHeight
          tempList.push(LisTop)

        })
        this.shopsLisTop = tempList
      },
      clickLeftItem(index1){
        this.scrollY = this.shopsLisTop[index1]
        this.rightscroll.scrollTo(0,-this.scrollY,300)
      },
      // leftScroll(index1){
        // let menuLists = this.$refs.menuList
        // let el = menuLists[index1]
        // console.log(el);
        // this.left.scrollToElement(ml,300,0,0)
      // }
    },
    watch:{
      searchnav(){
        this.$nextTick(() =>{
          this._initAScroll()
        })
      },
      searchshops(){
        this.$nextTick(() =>{
          this._initBScroll()
        })
      }
    },
    mounted() {
     //
     //
      this._initShopsLisTop()

      this.$store.dispatch("reqSearchNav")
      this.$store.dispatch("reqSearchShops")

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
  .shops-items{
    list-style: none;
  }
  .shops-items{

    border-bottom: 2px solid rgba(0,0,0,.1);

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
  /*.leftUl{*/
  /*  margin-top:-100px*/
  /*}*/
</style>