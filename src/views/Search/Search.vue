<template>
  <div class="search">
   <search-nav :isShowSearchPanel="isShowSearchPanel"></search-nav>
    <div class="shop"  >
      <div class="menu-wrapper" v-show="searchnav.length !== undefined && searchnav.length > 0">
        <ul class="leftUl" ref="menuParent" >
          <div >
          <li class="menu-item"
              v-for="(item,index) in searchnav"
              :key="index"
              :class="{current:index === currentIndex}"
              @click="clickLeftItem(index)"
              ref="menuList"
          >
            <span>{{item.name}}</span>
          </li>
          </div>
        </ul>
      </div>
      <div class="shop-wrapper" v-show="searchnav.length !== undefined && searchnav.length > 0">
      <ul ref="shopsLis">
        <li class="shops-li" v-for="(item,index) in searchnav" :key="index">
          <div class="shops-title">
            <h4>{{item.name}}</h4>
            <a href="">查看更多></a>
          </div>
          <ul class="shops-items" v-show="searchshops.length !== undefined && searchshops.length > 0">
            <li v-for="(item,index) in searchshops" :key="index">
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
        return this.shopsLisTop.findIndex((lisTop,index) =>{
          this._leftScroll(index)
          return this.scrollY>= lisTop && this.scrollY < this.shopsLisTop[index+1]

        })
      },

    },
    methods:{
      isShowSearchPanel(flag){
        this.isShow = flag
      },
      //左边导航条的滚动
      _initAScroll(){
        this.leftScroll = new BScroll(".menu-wrapper",{
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
      clickLeftItem(index){
        this.scrollY = this.shopsLisTop[index]
        this.rightscroll.scrollTo(0,-this.scrollY,300)
      },
      _leftScroll(index){
        let menuLists = this.$refs.menuList
        let el = menuLists[index]
        this.leftScroll.scrollToElement(el,300,0,0)
      }
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