<template>
  <div class="home">
    <ly-tab class="tab" v-model="selectedId" :items="items" :options="options" @change="handleChange"></ly-tab>
    <router-view></router-view>
      </div>
</template>

<script>


  export default {
    name: "Home",

    data(){
      return{
        selectedId:0,
        items:[
          {label:"热门"},
          {label:"服饰"},
          {label:"鞋包"},
          {label:"母婴"},
          {label:"百货"},
          {label:"食品"},
          {label:"内衣"},
          {label:"男装"},
          {label:"电器"},
        ],
        subRouterURL:["/home/hot","/home/dress","/home/Box","/home/mbady","/home/general","/home/food","/home/shirt","/home/man","/home/ele"],
        options:{
          activeColor:"#e9232c"  //设置选中的颜色
        }
      }
    },
    methods:{
      handleChange(input,id){
       this.$router.replace(this.subRouterURL[id])
      }
    }
  }
</script>

<style scoped>
  .home{
    padding: 49px 0 49px 0;
    width: 100%;
    height: 100%;
  }
  .tab{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #eeeeee;
    /*left: 0;*/
    z-index: 999;

  }
</style>