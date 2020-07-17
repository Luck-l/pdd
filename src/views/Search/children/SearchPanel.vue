<template>
  <div class="search-panel">
      <div class="search-nav">
        <div class="search-input">
          <img class="icon-search" src="" alt="">
          <input ref="mySearch" type="search" placeholder="请输入搜索内容">
        </div>
        <button  @click="isShowSearchPanel(false)">取消</button>
      </div>
      <div class="search-content">
        <div class="title">
          <img class="icon-clock" src="" alt="">
          <span>热门搜索</span>
        </div>
        <ul class="search-list">
          <li v-for="(item,index) in searchContent" :key="index">{{item.name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    name: "SearchPanel",
    data(){
      return{
        searchContent:[{name:"马桶盖通用"},{name:"鞋垫女"},{name:"迷你小风扇"},{name:"花生米批发"},{name:"红米note8"},{name:"烧烤架"},{name:"智能手表"},{name:"抹胸内衣"},]
      }
    },
    props:{
      isShowSearchPanel:Function
    },
    mounted() {
      this.$refs.mySearch.focus()
    }
  }
</script>

<style scoped>
.search-panel{
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
  .search-nav{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #dddddd;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .search-input{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fafafa;
    border: 1px solid rgba(0,0,0,.1);
    width: 80%;
    height: 38px;
    border-radius: 10px;
    padding: 0 10px;

  }
  .search-input img{
    color: #dddddd;
  }
  .search-input input{
    border: none;
    width: 90%;
    height: 90%;
    padding-left: 8px;
    font-size: 16px;
    background-color: transparent;
    color: #aaaaaa;
    outline: none;
  }
  .search-nav button{
    border: none;
    background-color: transparent;
    font-size: 16px;
    color: #aaaaaa;
  }

  .title{
    margin: 10px;
    color: #aaaaaa;
    display: flex;
    flex-direction: row;
  }
  .title img{
    margin-right: 5px;
  }

  .search-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }
  .search-list li{
    list-style: none;
    background-color: #eeddee;
    color: #aaaaaa;
    padding: 5px;
    margin: 5px 10px;
    border-radius: 8px;
    font-weight: lighter;
    font-size: 14px;
  }
</style>