<template>
  <div class="hot-nav">
    <div class="hot-nav-content">
      <div class="hot-content-inner" v-if="homenav.length > 0">
          <a href="#" class="hot-inner" v-for="(nav,index) in homenav" :key="index">
            <img :src="nav.imgURL" alt="">
            <span>{{nav.name}}</span>
          </a>
      </div>
    </div>
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="bottomWStyle"></div>
    </div>
  </div>

</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: "HotNav",
    data(){
      return{
        screenW:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,//屏幕宽度
        hotContendInnerW:800,//导航模块的总长度
        hotNavBottomW:100,//滚动条的总长度
        hotNavBottomInnerW:0,//滚动条的长度

        startX:0,
        endX:0,
        distance:0
      }
    },
    computed:{
      ...mapState(["homenav"]),

      bottomWStyle(){
        return{
          width:`${this.hotNavBottomInnerW}px`,
          left:`${this.distance}px`
        }
      }
    },
    mounted() {

      this.$store.dispatch("reqHomeNav")

      this.getBottomBarW()
      this.bindEvent()
    },
    methods:{
      getBottomBarW(){
        this.hotNavBottomInnerW = this.hotNavBottomW*(this.screenW/this.hotContendInnerW)
      },
      bindEvent(){
        this.$el.addEventListener("touchstart",this.handleTouchStart,false)
        this.$el.addEventListener("touchmove",this.handleTouchMove,false)
        this.$el.addEventListener("touchend",this.handleTouchEnd,false)
      },
      handleTouchStart(event){
        this.startX = event.touches[0].pageX


      },
      handleTouchMove(event){
        let touch = event.touches[0].pageX
        let moveWidth = Number(touch - this.startX)
        this.distance = -(this.hotNavBottomW * moveWidth /this.hotContendInnerW-this.endX)

        //边界值处理
        if(this.distance <=0){
          this.distance = 0
        }else if(this.distance >= this.hotNavBottomW - this.hotNavBottomInnerW ){
          this.distance = this.hotNavBottomW - this.hotNavBottomInnerW
        }
      },
      handleTouchEnd(){
        this.endX = this.distance

      }
    }
  }
</script>

<style scoped>
  .hot-nav{
    height: 200px;
    width: 100%;
    position: relative;
    background-color: #ffffff;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .hot-nav-content{
    width: 100%;
    overflow-x: scroll;

  }
  .hot-content-inner{
    width: 800px;
    height: 180px;
    display: flex;
    flex-wrap: wrap;

  }
  .hot-inner,.hot-inner4{
    height: 90px;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hot-inner img{
    width: 50%;
    margin-bottom: 4px;
  }
  .hot-inner4{
    position: relative;
  }
  .hot-inner4 img{
    margin-bottom: 4px;
    width: 50%;
  }
  .hot-inner4 .img44{
    width: 30%;
    position: absolute;
    top: 0px;
    left: 65px;
  }

  .hot-nav-content::-webkit-scrollbar{
    display: none;
  }
  .hot-nav-bottom{
    width: 100px;
    height: 2px;
    background-color: #ccc;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 10px;
  }
  .hot-nav-bottom-inner{
    position: absolute;
    left: 0;
    height: 100%;
    background-color: orange;
    width: 0;
  }

</style>