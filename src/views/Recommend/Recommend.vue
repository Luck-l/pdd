<template>
    <div class="shop-container" v-if="recommendshops.length > 0">
        <ul class="shop-list">
            <recommend-shops
              v-for="(shops,index) in recommendshops"
              :key="index"
              :shops = shops
            ></recommend-shops>
        </ul>
    </div>
</template>

<script>
  import RecommendShops from "./recommendshops/RecommendShops";
  import {mapState} from "vuex"
  import BScroll from "better-scroll"
  import {Indicator} from "mint-ui"
  export default {
    name: "Recommend",
    data(){
        return{
            page:1,
            count:10
        }
    },
    components:{
      RecommendShops
    },
    computed:{
      ...mapState(["recommendshops"])
    },
    mounted() {
        Indicator.open("正在加载数据")
      this.$store.dispatch("reqRecommendShops",{page:this.page,count:this.count,callback:() => {
            Indicator.close()
        }
      })
    },
    watch:{
      recommendshops(){
        this.$nextTick(() =>{
            this.page +=1
          this._initBScroll()
        })
      }
    },
    methods:{
      _initBScroll(){
        this.listScroll = new BScroll(".shop-container",{
          scrollY:true,
          prototype:3
        });

        //监听列表的滚动
        this.listScroll.on("touchEnd",(pos) =>{
          //监听上拉刷新
          if(pos.y > 50){
              console.log("上拉刷新")
          }
          if(this.listScroll.maxScrollY > pos.y + 20){
              Indicator.open("正在加载数据")
              this.$store.dispatch("reqRecommendShops",{page:this.page,count:this.count,callback:() => {
                      Indicator.close()
                  }
              })
          }
        })
          //监听列表滚动结束
          this.listScroll.on("scrollEnd",() =>{
              this.listScroll.refresh()
          })
      }
    }
  }
</script>

<style scoped>
  .shop-container{
    position: fixed;
    background-color: #fff;
    bottom: 0;
    top: 0;
  }
  .shop-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>